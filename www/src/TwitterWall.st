Smalltalk createPackage: 'TwitterWall'!
(Smalltalk packageAt: 'TwitterWall') imports: {'jQuery' -> 'amber/jquery/Wrappers-JQuery'}!
Widget subclass: #Tweet
	instanceVariableNames: 'json'
	package: 'TwitterWall'!

!Tweet methodsFor: 'not yet classified'!

json
^json
!

json: aJson
json := aJson
!

renderOn: tr

| tdUser tdMessage img a pMessage pDate |
tdUser := HTMLCanvas new td.
tdUser element id: 'user'.
tdMessage := HTMLCanvas new td.
tdMessage element id: 'messageBox'.

tr append: tdUser.
tr append: tdMessage.

img := HTMLCanvas new img src: (json at: 'profile_image_url') .
img element title: (json at: 'from_user').
img element longDesc: ('http://twitter.com/', (json at: 'from_user')).

a := HTMLCanvas new a href: ('http://twitter.com/', (json at: 'from_user')).
a append: img.

tdUser append: a.

pMessage := HTMLCanvas new p.
pMessage element id: 'message'.
pMessage append: (json at: 'text').
tdMessage append: pMessage.

pDate := HTMLCanvas new p.
pDate element id: 'date'.
pDate append: (json at: 'created_at').
tdMessage append: pDate.
! !

!Tweet class methodsFor: 'not yet classified'!

openAt: tr with: aJson
| tweet |
tweet := self new.
tweet json: aJson.
tweet renderOn: tr.
^tr
! !

Object subclass: #TwitterSearch
	instanceVariableNames: ''
	package: 'TwitterWall'!

!TwitterSearch methodsFor: 'not yet classified'!

query
| result queryString |

  queryString := ('#searchQuery'  asJQuery val) replace: '#' with: '%23'.

  result :=  JQuery current ajax: #{
        'type' -> 'GET'.
        'url' -> ('http://search.twitter.com/search.json?rpp=5&q=', queryString).
        'dataType' -> 'jsonp'.
        'success' -> [ :jsonData | '#output-list' asJQuery
            append: '<br>',(JSON stringify: jsonData)].
        'error' -> [ :xhr :status | window alert: ('TwitterSearch>>query ' , status)]
        }
!

success: tweets
| playground table tr |
playground := '#playground' asJQuery.
playground empty.
 [:html |
	table := html table.
	table element id: 'twitterwall'.

	tweets do: [ :tweet |
        	   tr := html tr.
	           table append: tr.
        	   Tweet openAt: tr with: tweet
        ]
] appendToJQuery: playground.
! !

