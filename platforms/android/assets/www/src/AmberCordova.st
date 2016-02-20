Smalltalk createPackage: 'AmberCordova'!
(Smalltalk packageAt: 'AmberCordova') imports: {'amber-ambercordova/Examples-Paper'. 'amber-ambercordova/WebSocket-Test'. 'amber-ambercordova/AmberVideo'.'amber-ambercordova/AmberVideo-Tests'. 'amber-ambercordova/AmberSnapsvg'. 'amber-ambercordova/Boomerang'. 'amber-ambercordova/Boomerang-Tests'. 'amber-ambercordova/CornucopiaScorecards-Platform'. 'amber-ambercordova/CornucopiaScorecards'. 'amber-ambercordova/CornucopiaScorecards-Tests'. 'amber-ambercordova/CornucopiaScorecardsApp'. 'amber-ambercordova/LindaClient'. 'amber-ambercordova/LindaClient-Tests'. 'amber-ambercordova/LindaClientDemo'. 'amber-ambercordova/Timer'. 'amber-ambercordova/Timer-Tests'. 'amber-ambercordova/TodoList'. 'amber-ambercordova/TwitterWall'. 'amber-ambercordova/Zendo'. 'amber-ambercordova/Zendo-Tests'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #AmberCordova
	instanceVariableNames: 'images cursor mySound aTrack paused'
	package: 'AmberCordova'!

!AmberCordova methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doNextImg
	window alert: 'doNextImg'.
	(cursor < images size)
		ifTrue: [ cursor := cursor + 1]
		ifFalse: [ cursor := 1].

	self showImage
!

doNextTrack
	window alert: 'doNextTrack'
!

doPictureListener
	| myElement |

	myElement := '#picture-frame' asJQuery at: 0.
	myElement addEventListener: 'touchend' func: [:ev |
		window touchEnd: ev myProcessing: [self processSwipe]].
!

doPlayNewTrack
	mySound := Audio new. "only create one instance, ever!!"

	aTrack := 'assets/audio/Ben_Dowling.mp3'.

	"If the media object is nil, then we aren't in the device, so
	 we fall back on the browser's Audio."
	window media ifNil: [
		mySound loop: true.
		mySound src: aTrack.
		mySound play]
	ifNotNil: [window playNewTrack: (window prefix),aTrack]
!

doPrevImg
	window alert: 'doPrevImg'.

	(cursor > 1)
		ifTrue: [ cursor := cursor - 1]
		ifFalse: [ cursor := images size].

	self showImage
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
!

geoLocation

  window navigator geolocation getCurrentPosition: [:position |
		window alert: 'Lat: ',(position coords latitude),
			  (String cr),'Long: ',(position coords longitude),
			  (String cr),'Altitude: ',(position coords altitude),
			  (String cr),'Heading: ',(position coords heading),
			  (String cr),'Speed: ',(position coords speed),
			  (String cr),'Time: ',(Date fromMilliseconds: (position timestamp))]
		onError: [:error |
			window alert: 'code: ',(error code),(String cr),
				  'message: ',(error message)]
!

processSwipe
    | direction |

    direction := window swipeDirection.
    (direction = 'up' or: direction = 'down') ifTrue: [
        self doNextTrack].
    direction = 'left' ifTrue: [
        self doPrevImg].
    direction = 'right' ifTrue: [
        self doNextImg].
!

showImage
"
    '#picture-frame' asJQuery append:
        '<style>#picture-frame {background-image:
        url(',(images at: cursor),');
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        background-size: cover;
        background-position: center;
        }</style>'
"
    '#picture-frame' asJQuery append:
        '<style>#picture-frame {background-image:
        url(',(images at: cursor),');
        background-size: cover;
        background-position: center;
        }</style>'
! !

!AmberCordova methodsFor: 'old-example'!

begin

    | msg button |

    msg := 'Hello world.'.
    button := '#sayHello' asJQuery.
    button click: [button after: '<p>' , msg , '</p>'].
!

helloFromSmalltalk
	^ self withEmbeddedJavascript
!

testLocalStorage
	"http://stackoverflow.com/questions/22604341/amber-and-localstorage-asjson/23234804#23234804"
	| coll hcoll |

	coll := OrderedCollection new.
	coll add: 'abc'.
	coll add: 'xon'.

	hcoll := HashedCollection new.
	hcoll at: 'en' put: 'English'.
	hcoll at: 'fr' put: 'French'.
	hcoll at: 'ge' put: 'German'.

	coll add: hcoll.

	window localStorage setItem: 'coll' value: coll asJSONString.

	"We set coll to nil to indicate that we
	are going to retrieve it back from the localStorage"

	coll := nil.

	window localStorage getItem: 'coll'.

	JSON parse: (window localStorage getItem: 'coll').

	SmalltalkImage current readJSObject:
				(JSON parse: (window localStorage getItem: 'coll')) .


	((JSON parse: (window localStorage getItem: 'coll')) at: 3) at: 'fr'
!

testXMLHttpRequest
	"http://stackoverflow.com/questions/18472447/amber-smalltalk-and-xmlhttprequest-get"
	| req |
	req := XMLHttpRequest new.
	req open: 'GET' url: 'http://amber-lang.net/' asynchronous: false.
	req send: ''.
	^ req responseText
!

withEmbeddedJavascript
	< return 'with ' + 'embedded ' +  'javascript ' + 'text ' >
! !

!AmberCordova methodsFor: 'starting'!

augmentPage

	images := OrderedCollection new.
	cursor := 1.
	images add: 'lotus_flower.png'.
	images add: 'http://wallpaperhdwide.com/wp-content/gallery/pictures-of-drawings-of-flowers/flower_drawings_by_maddyfield-d65jiy1.jpg'.
	images add: 'http://www.pics4world.com/vb/imgcache/2/24542showing.jpg'.
	images add: 'http://images.fineartamerica.com/images-medium-large/colourful-flowers-xafira-mendonsa.jpg'.
	images add: 'http://g03.a.alicdn.com/kf/HTB1rHldHVXXXXbbXFXXq6xXFXXX6/3D-wall-art-peacock-and-font-b-flowers-b-font-diy-diamond-painting-mosaic-square-diamonds.jpg'.

	self doPictureListener.

	"indicate this code has run on the web page"
	'#amber-with' asJQuery css: #{ 'background-color' ->'SpringGreen '}.

	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	'#play-track' asJQuery click: [self doPlayNewTrack ].
	'#pause-track' asJQuery click: [
		'#play-track' asJQuery off: 'click'.
		'#play-track' asJQuery click: [ window onResume ].
		window onPause "window fireEvent: 'pause'" ].
	'#show-image' asJQuery click: [ self showImage ].

	'#geo-location' asJQuery click: [ self geoLocation ].
! !

!AmberCordova class methodsFor: 'starting'!

start
	"AmberCordova start"
	^ self new augmentPage
! !
