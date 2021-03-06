Smalltalk createPackage: 'Helios-Workspace'!
Object subclass: #HLCodeModel
	instanceVariableNames: 'announcer environment receiver'
	package: 'Helios-Workspace'!

!HLCodeModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

environment
	^ environment ifNil: [ HLManager current environment ]
!

environment: anEnvironment
	environment := anEnvironment
!

receiver
	^ receiver ifNil: [ receiver := self defaultReceiver ]
!

receiver: anObject
	receiver := anObject
! !

!HLCodeModel methodsFor: 'actions'!

browse: anObject
	anObject browse
!

doIt: aString
	"Evaluate aString in the receiver's `environment`.
	
	Note: Catch any error and handle it manually, bypassing
	boot.js behavior to avoid the browser default action on
	ctrl+d/ctrl+p.
	
	See https://github.com/amber-smalltalk/amber/issues/882"

	^ [ self environment evaluate: aString for: self receiver ]
		tryCatch: [ :e | 
			ErrorHandler handleError: e.
			nil ]
!

inspect: anObject
	self environment inspect: anObject
! !

!HLCodeModel methodsFor: 'defaults'!

defaultReceiver
	^ self environment doItReceiver
! !

!HLCodeModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

HLWidget subclass: #HLCodeWidget
	instanceVariableNames: 'model wrapper code editor state'
	package: 'Helios-Workspace'!

!HLCodeWidget methodsFor: 'accessing'!

announcer
	^ self model announcer
!

contents
	^ editor getValue
!

contents: aString
	editor setValue: aString.
	state ifNotNil: [ self updateState ]
!

currentLine
    ^editor getLine: (editor getCursor line)
!

currentLineOrSelection
    ^editor somethingSelected
		ifFalse: [ self currentLine ]
		ifTrue: [ self selection ]
!

editorOptions
	^ #{
		'theme' -> ('helios.editorTheme' settingValueIfAbsent: 'default').
		'mode' -> 'text/x-stsrc'.
        'lineNumbers' -> true.
        'enterMode' -> 'flat'.
        'indentWithTabs' -> true.
		'indentUnit' -> 4.
        'matchBrackets' -> true.
        'electricChars' -> false.
		'keyMap' -> 'Amber'.
		'extraKeys' -> (HashedCollection with: ('helios.completionKey' settingValueIfAbsent: 'Shift-Space') -> 'autocomplete')
	}
!

model
	^ model ifNil: [ model := HLCodeModel new ]
!

model: aModel
	model := aModel
!

receiver
	^ self model receiver
!

receiver: anObject
	self model receiver: anObject
!

selection
	^editor getSelection
!

selectionEnd
   ^code element selectionEnd
!

selectionEnd: anInteger
   code element selectionEnd: anInteger
!

selectionStart
   ^code element selectionStart
!

selectionStart: anInteger
   code element selectionStart: anInteger
! !

!HLCodeWidget methodsFor: 'actions'!

browseIt
	| result |
	
	result := [ self doIt ] on: Error do: [ :exception | 
		^ ErrorHandler handleError: exception ].
		
	self model browse: result
!

clear
	self contents: ''
!

configureEditor
	self editor at: 'amberCodeWidget' put: self.
	self editor on: 'change' do: [ self onChange ].

	self wrapper asJQuery on: 'mousedown' in: '.CodeMirror pre' do: [ :event | | position node |
		(event at: 'ctrlKey') ifTrue: [
			position := self editor coordsChar: #{ 
				'left' -> event clientX.
				'top' -> event clientY
			}.
			self onCtrlClickAt: (position line @ position ch) + 1.
			event preventDefault ] ]
!

doIt
	| result |

	result := self model doIt: self currentLineOrSelection.
	self model announcer announce: (HLDoItExecuted on: model).

	^ result
!

editor
	^ editor
!

focus
	editor focus
!

inspectIt
	self model inspect: self doIt
!

navigateTo: aString
	Finder findString: aString
!

navigateToReference: aString
	(HLReferences openAsTab)
		search: aString
!

print: aString
	| start stop currentLine |
    currentLine := (editor getCursor: false) line.
	start := HashedCollection new.
	start at: 'line' put: currentLine.
	start at: 'ch' put: (editor getCursor: false) ch.
    (editor getSelection) ifEmpty: [
    	"select current line if selection is empty"
    	start at: 'ch' put: (editor getLine: currentLine) size.
        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.
    ].
	stop := HashedCollection new.
	stop at: 'line' put: currentLine.
	stop at: 'ch' put: ((start at: 'ch') + aString size + 2).

	editor replaceSelection: (editor getSelection, ' ', aString, ' ').
	editor setCursor: (editor getCursor: true).
	editor setSelection: stop end: start
!

printIt
	self print: self doIt printString
!

saveIt
	"I do not do anything"
!

setEditorOn: aTextarea
	<self['@editor'] = self._class()._codeMirror().fromTextArea(aTextarea, self._editorOptions())>
! !

!HLCodeWidget methodsFor: 'hints'!

messageHintFor: anEditor token: aToken
	^ (Smalltalk core allSelectors asArray 
		select: [ :each | each includesSubString: aToken string ])
		reject: [ :each | each = aToken string ]
!

variableHintFor: anEditor token: aToken
	| variables classNames pseudoVariables |
	
	variables := (anEditor display wrapper asJQuery find: 'span.cm-variable') get
		collect: [ :each | each asJQuery html ].
	
	classNames := Smalltalk classes collect: [ :each | each name ].
	pseudoVariables := Smalltalk pseudoVariableNames.
	
	^ ((variables, classNames, pseudoVariables) asSet asArray sort
		select: [ :each | each includesSubString: aToken string ])
		reject: [ :each | each = aToken string ]
! !

!HLCodeWidget methodsFor: 'reactions'!

onChange
	self updateState
!

onCtrlClickAt: aPoint
	| ast node |
	
	ast := [ Smalltalk parse: self editor getValue ] 
		on: Error 
		do: [ :error | ^ self ].
	
	node := ast 
		navigationNodeAt: aPoint 
		ifAbsent: [ ^ nil ].
		
	self navigateTo: node navigationLink
!

onInspectIt

	self inspectIt
!

onPrintIt

	self printIt
!

onSaveIt
	"I do not do anything"
! !

!HLCodeWidget methodsFor: 'rendering'!

renderButtonsOn: html
	html button 
		class: 'button';
		with: 'DoIt';
		onClick: [ self doIt ].
	html button 
		class: 'button';
		with: 'PrintIt';
		onClick: [ self printIt ].
	html button 
		class: 'button';
		with: 'InspectIt';
		onClick: [ self inspectIt ].
	html button 
		class: 'button';
		with: 'BrowseIt';
		onClick: [ self browseIt ]
!

renderContentOn: html
	html div class: 'editor'; with: [
		code := html textarea ].
	state := html div class: 'state'.
	
	html div 
		class: 'buttons_bar';
		with: [ self renderButtonsOn: html ].
	
	self 
		setEditorOn: code element;
		configureEditor;
		updateState
! !

!HLCodeWidget methodsFor: 'testing'!

canHaveFocus
	^ true
!

hasFocus
	^ code asJQuery is: ':active'
!

hasModification
	^ false
! !

!HLCodeWidget methodsFor: 'updating'!

updateState
	self hasModification 
		ifTrue: [ state asJQuery addClass: 'modified' ]
		ifFalse: [ state asJQuery removeClass: 'modified' ]
! !

!HLCodeWidget class methodsFor: 'accessing'!

codeMirror
	^ require value: 'codemirror/lib/codemirror'
!

keyMap
	^ HLManager current keyBinder systemIsMac
		ifTrue: [ self macKeyMap ]
		ifFalse: [ self pcKeyMap ]
!

macKeyMap
	^ #{
		'Alt-Backspace'			-> 'delWordBefore'.
		'Alt-Delete'			-> 'delWordAfter'. 
		'Alt-Left'				-> 'goWordLeft'.
		'Alt-Right'				-> 'goWordRight'. 
		'Cmd-A'					-> 'selectAll'. 
		'Cmd-Alt-F'				-> 'replace'. 
		'Cmd-D'					-> 'doIt'. 
		'Cmd-B'					-> 'browseIt'. 
		'Cmd-Down'				-> 'goDocEnd'. 
		'Cmd-End'				-> 'goDocEnd'. 
		'Cmd-F'					-> 'find'.
		'Cmd-G'					-> 'findNext'. 
		'Cmd-I'					-> 'inspectIt'. 
		'Cmd-Left'				-> 'goLineStart'. 
		'Cmd-P'					-> 'printIt'. 
		'Cmd-Right'				-> 'goLineEnd'. 
		'Cmd-S'					-> 'saveIt'. 
		'Cmd-Up'				-> 'goDocStart'. 
		'Cmd-Y'					-> 'redo'.
		'Cmd-Z'					-> 'undo'. 
		'Cmd-['					-> 'indentLess'. 
		'Cmd-]'					-> 'indentMore'.
		'Ctrl-Alt-Backspace'	-> 'delWordAfter'. 
		'Shift-Cmd-Alt-F'		-> 'replaceAll'.
		'Shift-Cmd-G'			-> 'findPrev'. 
		'Shift-Cmd-Z'			-> 'redo'. 
    	'fallthrough' 			-> { 'basic'. 'emacsy' }
  }
!

pcKeyMap
	^ #{
		'Alt-Left' -> 		'goLineStart'. 
		'Alt-Right' -> 		'goLineEnd'.
		'Alt-Up' -> 		'goDocStart'. 
		'Ctrl-A' -> 		'selectAll'. 
		'Ctrl-Backspace' -> 'delWordBefore'. 
		'Ctrl-D' -> 		'doIt'. 
		'Ctrl-B' -> 		'browseIt'. 
		'Ctrl-Delete' -> 		'delWordAfter'. 
		'Ctrl-Down' -> 		'goDocEnd'.
		'Ctrl-End' -> 		'goDocEnd'. 
		'Ctrl-F' -> 		'find'.
		'Ctrl-G' -> 		'findNext'. 
		'Ctrl-I' -> 		'inspectIt'.
		'Ctrl-Home' -> 		'goDocStart'. 
		'Ctrl-Left' -> 		'goWordLeft'. 
		'Ctrl-P' -> 		'printIt'.
		'Ctrl-Right' -> 	'goWordRight'. 
		'Ctrl-S' -> 		'saveIt'. 
		'Ctrl-Y' -> 		'redo'.
		'Ctrl-Z' -> 		'undo'. 
		'Ctrl-[' -> 		'indentLess'. 
		'Ctrl-]' -> 		'indentMore'.
		'Shift-Ctrl-F' -> 	'replace'. 
		'Shift-Ctrl-G' -> 	'findPrev'. 
		'Shift-Ctrl-R' -> 	'replaceAll'.
		'Shift-Ctrl-Z' -> 	'redo'. 
		'fallthrough' -> 	#('basic')
}
! !

!HLCodeWidget class methodsFor: 'hints'!

hintFor: anEditor options: options
	| cursor token completions codeMirror |
	
	codeMirror := self codeMirror.
	cursor := anEditor getCursor.
	token := anEditor getTokenAt: cursor.
	token at: 'state' put: ((codeMirror basicAt: 'innerMode')
		value: anEditor getMode value: (token at: 'state')) state.
	
	completions := token type = 'variable' 
		ifTrue: [ HLCodeWidget variableHintFor: anEditor token: token ]
		ifFalse: [ HLCodeWidget messageHintFor: anEditor token: token ].
	
	^ #{
		'list' -> completions.
		'from' -> ((codeMirror basicAt: 'Pos') value: cursor line value: token end).
		'to' -> ((codeMirror basicAt: 'Pos') value: cursor line value: token start)
	}
!

messageHintFor: anEditor token: aToken
	^ (anEditor at: 'amberCodeWidget')
		messageHintFor: anEditor token: aToken
!

variableHintFor: anEditor token: aToken
	^ (anEditor at: 'amberCodeWidget')
		variableHintFor: anEditor token: aToken
! !

!HLCodeWidget class methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		setupCodeMirror;
		setupCommands;
		setupKeyMaps.
!

setupCodeMirror
	<
		var codeMirror = self._codeMirror();
		codeMirror.keyMap["default"].fallthrough = ["basic"];
		codeMirror.commands.autocomplete = function(cm) {
			codeMirror.showHint(cm, self._hintFor_options_.bind(self));
		}
	>
!

setupCommands
	(self codeMirror basicAt: 'commands') 
		at: 'doIt' put: [ :cm | cm amberCodeWidget doIt ];
		at: 'inspectIt' put: [ :cm | cm amberCodeWidget inspectIt ];
		at: 'printIt' put: [ :cm | cm amberCodeWidget printIt ];
		at: 'saveIt' put: [ :cm | cm amberCodeWidget saveIt ];
		at: 'browseIt' put: [ :cm | cm amberCodeWidget browseIt ]
!

setupKeyMaps
	<self._codeMirror().keyMap['Amber'] = self._keyMap()>
! !

HLCodeWidget subclass: #HLNavigationCodeWidget
	instanceVariableNames: 'methodContents'
	package: 'Helios-Workspace'!

!HLNavigationCodeWidget methodsFor: 'accessing'!

configureEditor
	super configureEditor.
	self contents: self methodContents
!

contents: aString
	self methodContents: aString.
	super contents: aString
!

methodContents
	^ methodContents ifNil: [ '' ]
!

methodContents: aString
	^ methodContents := aString
!

previous
	"for browser lists widget"
!

previous: aWidget
	"for browser lists widget"
! !

!HLNavigationCodeWidget methodsFor: 'testing'!

hasModification
	^ (self methodContents = self contents) not
! !

!HLNavigationCodeWidget class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
		browserModel: aBrowserModel;
		yourself
! !

!HLNavigationCodeWidget class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLNavigationCodeWidget subclass: #HLBrowserCodeWidget
	instanceVariableNames: 'browserModel'
	package: 'Helios-Workspace'!

!HLBrowserCodeWidget methodsFor: 'accessing'!

browserModel
	^ browserModel
!

browserModel: aBrowserModel
	browserModel := aBrowserModel.
	self 
		observeSystem;
		observeBrowserModel
! !

!HLBrowserCodeWidget methodsFor: 'actions'!

observeBrowserModel
	self browserModel announcer
		on: HLSaveSourceCode
		send: #onSaveIt
		to: self;
		
		on: HLShowInstanceToggled
		send: #onShowInstanceToggled
		to: self;
		
		on: HLSourceCodeSaved
		send: #onSourceCodeSaved
		to: self;
		
		on: HLAboutToChange
		send: #onBrowserAboutToChange:
		to: self;
		
		on: HLParseErrorRaised
		send: #onParseError:
		to: self;
		
		on: HLCompileErrorRaised
		send: #onCompileError:
		to: self;
		
		on: HLUnknownVariableErrorRaised
		send: #onUnknownVariableError:
		to: self;
		
		on: HLInstVarAdded 
		send: #onInstVarAdded
		to: self;
		
		on: HLMethodSelected 
		send: #onMethodSelected:
		to: self;
		
    	on: HLClassSelected 
		send: #onClassSelected:
		to: self;
		
		on: HLPackageSelected 
		send: #onPackageSelected:
		to: self;
		
    	on: HLProtocolSelected 
		send: #onProtocolSelected: 
		to: self;
		
		on: HLSourceCodeFocusRequested 
		send: #onSourceCodeFocusRequested
		to: self;
		
		on: HLShowTemplate
		send: #onShowTemplate:
		to: self
!

observeSystem
	self browserModel systemAnnouncer
    	on: MethodModified
        send: #onMethodModified:
		to: self
!

refresh
	self hasModification ifTrue: [ ^ self ].
    self hasFocus ifTrue: [ ^ self ].

	self contents: self browserModel selectedMethod source
!

renderButtonsOn: html
	html button 
		class: 'button';
		with: 'SaveIt';
		onClick: [ self saveIt ].
	super renderButtonsOn: html
!

saveIt
	self browserModel saveSourceCode
!

unregister
	super unregsiter.
	
	self browserModel announcer unsubscribe: self.
	self browserModel systemAnnouncer unsubscribe: self
! !

!HLBrowserCodeWidget methodsFor: 'reactions'!

onBrowserAboutToChange: anAnnouncement
	| block |
	
	block := anAnnouncement actionBlock.
	
	self hasModification
		ifTrue: [
			self 
				confirm: 'Changes have not been saved. Do you want to discard these changes?' 
				ifTrue: [
					"Don't ask twice"
					self methodContents: self contents.
					block value ].
			
			
			HLChangeForbidden signal ]
!

onClassSelected: anAnnouncement
	| class |
	
	class:= anAnnouncement item.
	
	class ifNil: [ ^ self contents: '' ].
	self contents: class definition
!

onCompileError: anAnnouncement
	self alert: anAnnouncement error messageText
!

onInstVarAdded
	self browserModel save: self contents
!

onMethodModified: anAnnouncement
	| method |
	
	method := anAnnouncement method.
	
	self browserModel selectedClass = method methodClass ifFalse: [ ^ self ].
	self browserModel selectedMethod ifNil: [ ^ self ].
	self browserModel selectedMethod selector = method selector ifFalse: [ ^ self ].

	self refresh
!

onMethodSelected: anAnnouncement
	| method |
	
	method := anAnnouncement item.
	
	method ifNil: [ ^ self contents: '' ].
	self contents: method source
!

onPackageSelected: anAnnouncement
	| package |
	
	package := anAnnouncement item.
	
	package ifNil: [ ^ self contents: '' ].
	self contents: package definition
!

onParseError: anAnnouncement
	| lineIndex newContents |
	
	lineIndex := 1.
	
	self contents: (String streamContents: [ :stream |
		self contents linesDo: [ :each |
			lineIndex = anAnnouncement line 
				ifTrue: [ 
					stream 
						nextPutAll: (each copyFrom: 1 to: anAnnouncement column);
						nextPutAll: '<- ';
						nextPutAll: anAnnouncement message;
						nextPutAll: ' ';
						nextPutAll: (each copyFrom: anAnnouncement column + 1 to: each size) ]
				ifFalse: [ stream nextPutAll: each ].
			stream nextPutAll: String cr.
			lineIndex := lineIndex + 1 ] ])
!

onProtocolSelected: anAnnouncement
	self browserModel selectedClass ifNil: [ ^ self contents: '' ].
	self contents: self browserModel selectedClass definition
!

onSaveIt
	self browserModel save: self contents
!

onShowInstanceToggled
	self browserModel selectedClass ifNil: [ ^ self contents: '' ].
    
	self contents: self browserModel selectedClass definition
!

onShowTemplate: anAnnouncement
	self contents: anAnnouncement template
!

onSourceCodeFocusRequested
	self focus
!

onSourceCodeSaved
	self methodContents: self contents.
	self updateState
!

onUnknownVariableError: anAnnouncement
	| error |
	
	error := anAnnouncement error.
	
	self 
		confirm: (String streamContents: [ :stream |
			stream 
				nextPutAll: error messageText;
				nextPutAll: String cr;
				nextPutAll: 'Would you like to define an instance variable?' ])
		ifTrue: [
			self browserModel addInstVarNamed: error variableName ]
! !

!HLBrowserCodeWidget class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
		browserModel: aBrowserModel;
		yourself
! !

!HLBrowserCodeWidget class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLWidget subclass: #HLWorkspace
	instanceVariableNames: 'codeWidget transcript'
	package: 'Helios-Workspace'!

!HLWorkspace methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]
!

transcript
	^ transcript ifNil: [ transcript := HLTranscript new ]
! !

!HLWorkspace methodsFor: 'actions'!

focus
	^ self codeWidget focus
!

unregister
	super unregister.
	self transcript unregister
! !

!HLWorkspace methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer with: (HLHorizontalSplitter
		with: self codeWidget
		with: [ :canvas | self renderTranscriptOn: canvas ]))
!

renderTranscriptOn: html
	html div 
		class: 'transcript-container';
		with: [
			html div
				class: 'list-label';
				with: 'Transcript'.
			self transcript renderOn: html ]
! !

!HLWorkspace methodsFor: 'testing'!

canHaveFocus
	^ true
! !

!HLWorkspace class methodsFor: 'accessing'!

tabClass
	^ 'workspace'
!

tabLabel
	^ 'Workspace'
!

tabPriority
	^ 10
! !

!HLWorkspace class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

