Smalltalk createPackage: 'WebSocket-Test'!
Object subclass: #WebSocketTest
	instanceVariableNames: 'wsUri output s'
	package: 'WebSocket-Test'!

!WebSocketTest methodsFor: 'not yet classified'!

doSend: message

  	self writeToScreen: ('SENT: ' , message).
    self s send: message
!

init

	self output: ( document getElementById: 'output' ).
    self testWebSocket
!

newWebSocket: aWSConnectionURL
<return new WebSocket(aWSConnectionURL);>
!

onClose: evt

    self writeToScreen: 'DISCONNECTED'
!

onError: evt

    self writeToScreen: ( '<span style="color: red;">ERROR:</span> ' , evt).
!

onMessage: evt

    self writeToScreen: ( '<span style="color: blue;">RESPONSE: ' , (evt data), '</span>').
    self s close
!

onOpen: evt

   self writeToScreen: 'CONNECTED'.
   self  doSend: 'Amber rocks'
!

output

	^output
!

output: aString

	output := aString
!

s

	^s
!

s: aSocket

	s := aSocket
!

testWebSocket

	self testWebSocket: self wsUri
!

testWebSocket: aWSConnectionURL

    s := self newWebSocket: aWSConnectionURL.

    s onopen: [:evt | self onOpen: evt].
    s onclose: [:evt | self onClose: evt].
    s onmessage: [:evt | self onMessage: evt].
    s onerror: [:evt | self onError: evt ].
!

writeToScreen: message
 	| pre |
    pre := document createElement: 'p'.
    pre style at: 'wordWrap' put: 'break-word'.
    pre at: 'innerHTML' put: message.
    self output appendChild: pre
!

wsUri

	^wsUri
!

wsUri: aString

	wsUri := aString
! !

Widget subclass: #WebSocketTestWidget
	instanceVariableNames: 'websocketTest'
	package: 'WebSocket-Test'!

!WebSocketTestWidget methodsFor: 'not yet classified'!

initialize

	super initialize.

	self websocketTest: WebSocketTest new.
    self websocketTest wsUri: 'ws://echo.websocket.org'. " 'ws://127.0.0.1:8080'. "
!

renderOn: html

	html h2: 'Amber WebSocket Test'.

    html div id: 'output'.

    self websocketTest init.
!

websocketTest

	^websocketTest
!

websocketTest: aTest

	websocketTest := aTest
! !

!WebSocketTestWidget class methodsFor: 'not yet classified'!

startTest

        "self new appendToJQuery: 'body' asJQuery"
		"web-socket"
		self new appendToJQuery: '#web-socket' asJQuery
! !

