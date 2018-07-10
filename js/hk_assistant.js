/*
Hakta Assistant by Emil Sabitov (Hakta)
Version: 0.5
 */
var HKAssistant = (function () {
	'use strict';
	var self = this;
	var bubble1 , bubble2 , assistant , comment , comment_clone , assistant_comment_close , assistant_comment_text;
	var was_turned_off = false;
	var messages = {
		hello : "Hi! Don't worry. I will help you to use this site. You can hover element and i will suggest you." ,
		self_help : "Yeah. It's me. Hi :)"
	};
	self.init = function (hello_message) {
		createAssistantBlock();
		findBlocksForHelp();
		if (hello_message ){
			messages.hello = hello_message
		}
	};
	self.activate = function () {
		assistant.toggleClass( 'active' );
		if ( assistant.hasClass( 'active' ) ) {
			assistant.animate( {width : '168px'} , 100 );
			self.showMessage( messages.hello );
		} else {
			hideMessageBlock();
			assistant.delay( 600 ).animate( {width : '0px'} , 100 ).removeClass( 'new' ).removeClass( '.active' );
		}
	};

	self.showMessage = function ( message ) {
		comment_clone.text( message );
		showMessageBlock();
	};
	var
		createAssistantBlock = function () {
			assistant = $( '<div id="hk_assistant" class="hk_assistant_help" data-hk-help="'+messages.self_help+'">' );
			bubble1 = $( '<div id="hk_assistant_bubble1"></div>' );
			bubble2 = $( '<div id="hk_assistant_bubble2"></div>' );
			assistant_comment_text = $( '<p id="hk_assistant_comment_text"></p>' );
			assistant_comment_close = $( '<div id="hk_assistant_comment_close"></div>' );
			comment_clone = $( '<p id="hk_assistant_comment_clone"></p>' );
			comment = $( '<div id="hk_assistant_comment"></div>' );

			assistant.append( bubble1 );
			assistant.append( bubble2 );
			comment.append( assistant_comment_text );
			comment.append( assistant_comment_close );
			assistant.append( comment );
			assistant.append( comment_clone );

			$( 'body' ).append( assistant );

			assistant_comment_close.on( 'click' , function (event) {
				was_turned_off = true;
				hideMessageBlock();
				event.preventDefault();
				event.stopPropagation();
			} );
			assistant.on('click', function (event) {
				was_turned_off = false;
				showMessageBlock();

				event.preventDefault();
				event.stopPropagation();
			})
		} ,
		findBlocksForHelp = function () {

			$( '.hk_assistant_help' ).on( 'mouseenter' , function () {
				if ( was_turned_off ) {
					return false;
				}
				self.showMessage( $( this ).data( 'hk-help' ) );
			} );

		} ,
		showMessageBlock = function () {
			var comment_clone_height = comment_clone.outerHeight();
			bubble1.animate( {width : '14px'} , 100 );
			bubble2.delay( 200 ).animate( {width : '24px'} , 100 );

			comment.delay( 400 ).animate( {width : "246px" , opacity : "1"} , {queue : true , duration : 200} )
				.animate( {padding : "14px" , borderRadius : "14px" , borderWidth : "2px"} , {
					queue : true ,
					duration : 100
				} )
				.animate( {height : comment_clone_height + 'px'} , 100 );
			assistant_comment_text.html( comment_clone.text() );
		} ,
		hideMessageBlock = function () {
			comment.animate( {height : 0 + 'px' , opacity : "0"} , 200 )
				.animate( {padding : "0px" , borderRadius : "0px" , borderWidth : "0px"} , {
					queue : true ,
					duration : 100
				} )
				.animate( {width : "0px"} , {queue : true , duration : 100} );

			bubble2.delay( 200 ).animate( {width : '0px'} , 100 );
			bubble1.delay( 400 ).animate( {width : '0px'} , 100 );
		};
	return self;
});
