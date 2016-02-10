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
json := aJson.

"window alert: (JSON stringify: aJson)"
"Transcript show: (JSON stringify: aJson); cr;cr."
!

renderOn: tr

| tdUser tdMessage img a pMessage pDate user |
tdUser := HTMLCanvas new td.
tdUser element id: 'user'.
tdMessage := HTMLCanvas new td.
tdMessage element id: 'messageBox'.

tr append: tdUser.
tr append: tdMessage.

user := json at: 'user'.

img := HTMLCanvas new img src: (user at: 'profile_image_url') .
img element title: (user at: 'name').
img element longDesc: ('http://twitter.com/', (user at: 'screen_name')).

a := HTMLCanvas new a href: ('http://twitter.com/', (user at: 'screen_name')).
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
    | queryString |

    queryString := ('#searchQuery'  asJQuery val) replace: '#' with: '%23'.

    "self query: ('http://localhost:8080/api/Twitter?count=5&q=', queryString)."

	self query:  ('http://www.clapistan.com/api/Twitter?count=5&q=', queryString).
!

query: queryURL
  | result |

  result :=  JQuery current ajax: #{
        'type' -> 'GET'.
        'url' -> queryURL.
        'dataType' -> 'json'.
		'success' -> [ :jsonData | 
			self success: (jsonData at: 'statuses')].
        'error' -> [ :xhr :status | window alert: (status , ' ' , 'TwitterSearch>>query: ', queryURL )]
        }
!

success2: tweets
	| wall table tr |
	wall := '#playground'.
	table := (HTMLCanvas onJQuery: (wall asJQuery))  table.
	table element id: 'twitterwall'.

	tweets do: [ :tweet | 
			   tr := HTMLCanvas new tr.
			   table append: tr.
			   Tweet openAt: tr with: tweet
			   ].
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

