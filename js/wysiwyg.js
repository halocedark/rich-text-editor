RichTextEditor = function() {};
$( document ).ready(function() 
{

	'use strict';

	RichTextEditor = function(parentElement)
	{

		this.parent = parentElement;
		this.editorHTML = `
			<div class="rich-text-editor">
				<div class="media-overlay">
					<div class="container">
						<div class="title">
							<p>Add Images</p>
							<a href="#" id="close" title="close">
								<i class="far fa-times-circle"></i>
							</a>
						</div>
						<div class="tabs">
							<a href="#" data-id="upload" class="active">Upload</a>
							<a href="#" data-id="url">From a URL</a>
						</div>
						<div class="upload-tab">
							<div class="header">
								<input type="file" id="chooseFilesInput">
								<button type="button" class="choose-files" id="chooseFiles">
									<i class="fas fa-cloud-upload-alt"></i>
									Choose files
								</button>
								<p>You may upload only one file at a time. Use JPG, GIF, or PNG files.</p>
							</div>
							<div class="images">
								<!-- Images Goes Here -->
							</div>
						</div>
						<div class="url-tab">
							<div class="header">
								<label for="imageURL">Paste an image URL here:</label>
								<input type="text" id="imageURL" placeholder="Image URL goes here...">
							</div>
							<div class="images">
								<div class="info">
									<p>If your URL is correct, you'll see an image preview here.  Large images may take a few minutes to appear.</p>
									<p>Remember: Using others' images on the web without their permission may be bad manners, or worse, copyright infringement.</p>
								</div>
							</div>
						</div>
						<div class="footer">
							<a href="#" class="add-selected disabled" id="addSelected" disabled="true">Add Selected</a>
							<a href="#" class="cancel" id="cancel">Cancel</a>
						</div>
					</div>	
				</div>
				<div class="image-controls-overlay">
					<div class="container p-0">
						<div class="image-controls">
							<div class="title-bar">
								<p>Image Settings</p>
								<a href="#" class="dismiss" id="dismiss">
									<i class="fas fa-times"></i>
								</a>
							</div>
							<div class="body">
								<img src="" alt="">
							</div>
							<div class="footer bg-dark">
								<div class="row">
									<div class="col-md col-box text-center">
										<div class="sizes">
											<p>Adjust Size</p>
											<div class="btn-group btn-group-sm" role="group">
												<button type="button" id="small" href="#" class="btn btn-dark rounded-0">Small</button>
												<button type="button" id="medium" href="#" class="btn btn-dark rounded-0">Medium</button>
												<button type="button" id="large" href="#" class="btn btn-dark rounded-0">Large</button>
												<button type="button" id="x_large" href="#" class="btn btn-dark rounded-0">X-Large</button>
												<button type="button" id="original" href="#" class="btn btn-dark rounded-0">Original</button>	
												<button type="button" id="viewport" href="#" class="btn btn-dark rounded-0">Viewport</button>
											</div>
										</div>
									</div>
									<div class="col-md col-box text-center">
										<div class="alignments">
											<p>Adjust Alignment</p>
											<div class="btn-group btn-group-sm" role="group">
												<button type="button" id="left" href="#" class="btn btn-dark rounded-0">Left</button>
												<button type="button" id="center" href="#" class="btn btn-dark rounded-0">Center</button>
												<button type="button" id="right" href="#" class="btn btn-dark rounded-0">Right</button>
											</div>
										</div>
									</div>
									<div class="col-md col-box text-center">
										<div class="other-settings">
											<p>Other Settings</p>
											<div class="btn-group btn-group-sm" role="group">
												<div class="dropdown properties">
												  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												    Properties
												  </button>
												  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
												    <div class="form-group">
												    	<label>Title:</label>
												    	<input type="text" id="title" placeholder="Enter title...">
												    </div>
												    <div class="form-group">
												    	<label>Alt Text:</label>
												    	<input type="text" id="alt" placeholder="Enter alt...">
												    </div>
												    <div class="form-group">
												    	<label>Src:</label>
												    	<input type="text" id="src" placeholder="Enter src...">
												    </div>
												    <div class="form-group">
												    	<button type="button" id="changeProperties" class="btn btn-light d-block w-100 rounded-0">Change</button>
												    </div>
												  </div>
												</div>
												<button type="button" id="remove" href="#" class="btn btn-dark rounded-0">Remove</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="changes-buttons">
								<div class="btn-group btn-group-sm" role="group">
									<button type="button" id="saveChanges" class="btn btn-light rounded-0">Save changes</button>
									<button type="button" id="cancel" class="btn btn-light rounded-0">Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="add-link-overlay">
					<div class="container p-0">
						<div class="title-bar">
							<p>Link Settings</p>
							<a href="#" class="dismiss" id="dismiss">
								<i class="fas fa-times"></i>
							</a>
						</div>
						<div class="body">
							<div class="text-to-display">
								<label for="textDisplay">Text to display:</label>
								<input type="text" id="textDisplay" placeholder="Enter text to display...">
							</div>
							<div class="properties">
								<div class="row">
									<div class="col-md-3 col-box">
										<div class="link-types">
											<p>Link to:</p>
											<a href="#" id="webAddress" class="selected">
												<i class="fas fa-link"></i>
											  Web address
											</a>
											<a href="#" id="emailAddress">
													<i class="fas fa-at"></i>
											    Email address
											</a>
										</div>
									</div>
									<div class="col-md col-box">
										<div class="is-web-address">
											<div class="link">
												<p>To what URL should this link go?</p>
												<input type="text" id="linkAddress" placeholder="Enter url EX: http://www.website.com/">
												<a href="#" id="testLink">Test this link</a>
											</div>
											<div class="help">
												<p>
													<b>Not sure what to put in the box?</b> First, find the page on the web that you want to link to. (A <a href="https://www.google.com">search engine</a> might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.
												</p>
											</div>
										</div>
										<div class="is-email-address">
											<div class="link">
												<p>To what email address should this link?</p>
												<input type="email" id="mailToAddress" placeholder="Enter email address EX: email@mail.com">
											</div>
											<div class="help">
												<p>
													<b>Be careful.</b> Remember that any time you include an email address on a web page, nasty spammers can find it too.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="additional">
									<p class="p-0 mb-2 text-info font-weight-bold">Additional Properties</p>
									<div class="custom-control custom-checkbox">
									  <input type="checkbox" class="custom-control-input" id="openNewWindow">
									  <label class="custom-control-label" for="openNewWindow">Open this link in a new window.</label>
									</div>
									<div class="custom-control custom-checkbox">
									  <input type="checkbox" class="custom-control-input" id="addNoFollow">
									  <label class="custom-control-label" for="addNoFollow">Add 'rel=nofollow' attribute.</label>
									</div>
								</div>	
							</div>
						</div>
						<div class="changes-buttons">
							<div class="btn-group btn-group-sm" role="group">
								<button type="button" id="ok" class="btn btn-light rounded-0">OK</button>
								<button type="button" id="cancel" class="btn btn-light rounded-0">Cancel</button>
							</div>
						</div>
					</div>
				</div>

				<form action="#" id="editorForm" method="POST">
						<div class="container">
							<div class="editor-title">
								<h2>Add New Post</h2>
							</div>
							<div class="post-title" id="postTitle">
								<input type="text" name="post_title" class="form-control" placeholder="Enter title here...">
								<a href="#" id="reset" class="reset">
									<i class="fas fa-times"></i>
								</a>
							</div>
							<div class="post-controls">
								<div class="add-media">
									<button type="button">
										<i class="far fa-images"></i>
										Add Media
									</button>
								</div>
								<div class="text-format">
									<div class="level01 clearfix">
										<select id="addHeadings" class="custom-select custom-select-sm paragraph-select">
											<option value="Paragraph" data-tag="p">Paragraph</option>
											<option value="Heading-1" data-tag="h1" style="font-size: 2.5rem; color: #fff2e6;">Heading-1</option>
											<option value="Heading-2" data-tag="h2" style="font-size: 2rem; color: #ffeecc;">Heading-2</option>
											<option value="Heading-3" data-tag="h3" style="font-size: 1.75rem; color: #eeffcc;">Heading-3</option>
											<option value="Heading-4" data-tag="h4" style="font-size: 1.5rem; color: #ffccff;">Heading-4</option>
											<option value="Heading-5" data-tag="h5" style="font-size: 1.25rem; color: #d9b3ff;">Heading-5</option>
											<option value="Heading-6" data-tag="h6" style="font-size: 1rem; color: #ccffff;">Heading-6</option>
										</select>
										<div class="formats">
											<a href="#" id="bold" data-format="bold">
												<i class="fas fa-bold"></i>
											</a>
											<a href="#" id="italic" data-format="italic">
												<i class="fas fa-italic"></i>
											</a>
											<a href="#" id="underline" data-format="underline">
												<i class="fas fa-underline"></i>
											</a>
											<a href="#" id="strikeThrough" data-format="strikeThrough">
												<i class="fas fa-strikethrough"></i>
											</a>
											<a href="#" id="formatBlock" data-format="formatBlock" style="transform: rotate(30deg);">
												<i class="fas fa-quote-left"></i>
											</a>
											<a href="#" id="insertUnorderedList" data-format="insertUnorderedList">
												<i class="fas fa-list-ul"></i>
											</a>
											<a href="#" id="insertOrderedList" data-format="insertOrderedList">
												<i class="fas fa-list-ol"></i>
											</a>
											<a href="#" id="justifyLeft" data-format="justifyLeft">
												<i class="fas fa-align-left"></i>
											</a>
											<a href="#" id="justifyCenter" data-format="justifyCenter">
												<i class="fas fa-align-center"></i>
											</a>
											<a href="#" id="justifyRight" data-format="justifyRight">
												<i class="fas fa-align-right"></i>
											</a>
											<a href="#" id="addLink">
												<i class="fas fa-link"></i>
											</a>
											<a href="#" id="removeLink">
												<i class="fas fa-unlink"></i>
											</a>
											<a href="#" id="undo" data-format="undo">
												<i class="fas fa-undo-alt"></i>
											</a>
											<a href="#" id="redo" data-format="redo">
												<i class="fas fa-redo-alt"></i>
											</a>	
										</div>
									</div>
									<div class="level02 clearfix">
										<select id="fontFamily" class="custom-select custom-select-sm font-family-select">
											<option value="" disabled selected>Font Family</option>
											<option value="sans-serif" data-name="sans-serif">sans-serif</option>
											<option value="Roboto" data-name="Roboto">Roboto</option>
											<option value="arial" data-name="arial">arial</option>
										</select>
										<select id="fontSize" class="custom-select custom-select-sm font-size-select">
											<option value="" disabled selected>Font Sizes</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
										</select>
										<div class="formats">
											<div class="dropdown color-picker" id="fontColorPicker">
											  <button class="btn btn-secondary dropdown-toggle rounded-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											    <i class="fas fa-palette"></i>
											  </button>
											  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
											    <p class="text-muted">Select Color:</p>
											    <div class="color-group">
												    <a href="#" data-color="#000000" style="background: #000000; user-select: none;"></a>
												    <a href="#" data-color="#737373" style="background: #737373; user-select: none;"></a>
												    <a href="#" data-color="#808080" style="background: #808080; user-select: none;"></a>
												    <a href="#" data-color="#999999" style="background: #999999; user-select: none;"></a>
												    <a href="#" data-color="#a6a6a6" style="background: #a6a6a6; user-select: none;"></a>
												    <a href="#" data-color="#b3b3b3" style="background: #b3b3b3; user-select: none;"></a>
												    <a href="#" data-color="#e6e6e6" style="background: #e6e6e6; user-select: none;"></a>
												    <a href="#" data-color="#ffffff" style="background: #ffffff; user-select: none;"></a>	
											    </div>
											    <div class="color-group">
												    <a href="#" data-color="#ff0000" style="background: #ff0000; user-select: none;"></a>
												    <a href="#" data-color="#ffa500" style="background: #ffa500; user-select: none;"></a>
												    <a href="#" data-color="#ffff00" style="background: #ffff00; user-select: none;"></a>
												    <a href="#" data-color="#00ff00" style="background: #00ff00; user-select: none;"></a>
												    <a href="#" data-color="#00ffff" style="background: #00ffff; user-select: none;"></a>
												    <a href="#" data-color="#33ffd6" style="background: #33ffd6; user-select: none;"></a>
												    <a href="#" data-color="#ff00ff" style="background: #ff00ff; user-select: none;"></a>
												    <a href="#" data-color="#800080" style="background: #800080; user-select: none;"></a>	
											    </div>
											    <div class="color-group">
												    <div class="row no-gutters">
												    	<div class="col">
												    		<a href="#" data-color="#f4d5e2" style="background: #f4d5e2; user-select: none;"></a>
														    <a href="#" data-color="#eaaec7" style="background: #eaaec7; user-select: none;"></a>
														    <a href="#" data-color="#c93673" style="background: #c93673; user-select: none;"></a>
														    <a href="#" data-color="#a12b5c" style="background: #a12b5c; user-select: none;"></a>
														    <a href="#" data-color="#792045" style="background: #792045; user-select: none;"></a>
														    <a href="#" data-color="#51152e" style="background: #51152e; user-select: none;"></a>
												    	</div>
												    	<div class="col">
												    		<a href="#" data-color="#fde6ce" style="background: #fde6ce; user-select: none;"></a>
														    <a href="#" data-color="#fddab5" style="background: #fddab5; user-select: none;"></a>
														    <a href="#" data-color="#fcce9c" style="background: #fcce9c; user-select: none;"></a>
														    <a href="#" data-color="#fab56b" style="background: #fab56b; user-select: none;"></a>
														    <a href="#" data-color="#faa952" style="background: #faa952; user-select: none;"></a>
														    <a href="#" data-color="#f78308" style="background: #f78308; user-select: none;"></a>
												    	</div>
												    	<div class="col">
												    		<a href="#" data-color="#fff2cc" style="background: #fff2cc; user-select: none;"></a>
														    <a href="#" data-color="#ffecb3" style="background: #ffecb3; user-select: none;"></a>
														    <a href="#" data-color="#ffe699" style="background: #ffe699; user-select: none;"></a>
														    <a href="#" data-color="#ffdf80" style="background: #ffdf80; user-select: none;"></a>
														    <a href="#" data-color="#ffd966" style="background: #ffd966; user-select: none;"></a>
														    <a href="#" data-color="#ffd24d" style="background: #ffd24d; user-select: none;"></a>
												    	</div>
												    	<div class="col">
												    		<a href="#" data-color="#e0f5d6" style="background: #e0f5d6; user-select: none;"></a>
														    <a href="#" data-color="#c2ebad" style="background: #c2ebad; user-select: none;"></a>
														    <a href="#" data-color="#a3e184" style="background: #a3e184; user-select: none;"></a>
														    <a href="#" data-color="#84d75b" style="background: #84d75b; user-select: none;"></a>
														    <a href="#" data-color="#66cd32" style="background: #66cd32; user-select: none;"></a>
														    <a href="#" data-color="#51a428" style="background: #51a428; user-select: none;"></a>
												    	</div>
												    	<div class="col">
												    		<a href="#" data-color="#d4f0f7" style="background: #d4f0f7; user-select: none;"></a>
														    <a href="#" data-color="#aae2ee" style="background: #aae2ee; user-select: none;"></a>
														    <a href="#" data-color="#7fd3e6" style="background: #7fd3e6; user-select: none;"></a>
														    <a href="#" data-color="#55c4dd" style="background: #55c4dd; user-select: none;"></a>
														    <a href="#" data-color="#2ab6d5" style="background: #2ab6d5; user-select: none;"></a>
														    <a href="#" data-color="#2291aa" style="background: #2291aa; user-select: none;"></a>
												    	</div>
												    	<div class="col">
												    		<a href="#" data-color="#cfe6fc" style="background: #cfe6fc; user-select: none;"></a>
														    <a href="#" data-color="#a0cdf8" style="background: #a0cdf8; user-select: none;"></a>
														    <a href="#" data-color="#70b5f5" style="background: #70b5f5; user-select: none;"></a>
														    <a href="#" data-color="#409cf2" style="background: #409cf2; user-select: none;"></a>
														    <a href="#" data-color="#1183ee" style="background: #1183ee; user-select: none;"></a>
														    <a href="#" data-color="#0d69bf" style="background: #0d69bf; user-select: none;"></a>
												    	</div>
												    	<div class="col">
												    		<a href="#" data-color="#ddd6f5" style="background: #ddd6f5; user-select: none;"></a>
														    <a href="#" data-color="#bbacec" style="background: #bbacec; user-select: none;"></a>
														    <a href="#" data-color="#9983e2" style="background: #9983e2; user-select: none;"></a>
														    <a href="#" data-color="#775ad8" style="background: #775ad8; user-select: none;"></a>
														    <a href="#" data-color="#5530cf" style="background: #5530cf; user-select: none;"></a>
														    <a href="#" data-color="#4427a5" style="background: #4427a5; user-select: none;"></a>
												    	</div>
												    	<div class="col">
												    		<a href="#" data-color="#f6d5e7" style="background: #f6d5e7; user-select: none;"></a>
														    <a href="#" data-color="#ecacce" style="background: #ecacce; user-select: none;"></a>
														    <a href="#" data-color="#e382b6" style="background: #e382b6; user-select: none;"></a>
														    <a href="#" data-color="#d9599d" style="background: #d9599d; user-select: none;"></a>
														    <a href="#" data-color="#d02f85" style="background: #d02f85; user-select: none;"></a>
														    <a href="#" data-color="#a6266a" style="background: #a6266a; user-select: none;"></a>
												    	</div>
												    </div>
											    </div>
											    <input type="text" id="selectedColor" placeholder="#f2f2f2">
											  </div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="post-body" id="postBody">
								<div class="form-control text-area" id="textArea" contenteditable="true">
								</div>
								<textarea class="form-control" name="post_body" id="hiddenTextArea" style="display: none;"></textarea>
							</div>
							<div class="post-submit">
								<button type="submit" class="create-new-post" id="createNewPost" name="create_new_post">Create New Post</button>
							</div>
						</div>	
				</form>	
			</div>
		`;
		this.action = '';
		if ( this.parent != undefined )
		{
			this.parent.html(this.editorHTML);
		}
		else
		{
			console.log('Unknown parent element!');
			return false;
		}

		this.addFontFamily = function(fonts)
		{

			fontFamily.html('<option value="" disabled="" selected="">Font Family</option>');

			fonts.forEach( function(font, index)
			{

				fontFamily.append('<option value="'+font+'" data-name="'+font+'">'+font+'</option>');

			});

		}

		// Upload Image
		this.submit = function(callback, action = this.action)
		{

			if ( action === '' )
				return false;

			var images  = {
				items: []
			};
			$('.rich-text-editor #postBody #textArea img').each(function(index) 
			{ 
				var $this = $(this);
				var imageObject = {
					html: $this.prop('outerHTML'),
					src: $this.attr('src'),
					alt: $this.attr('alt'),
					title: $this.attr('title')
				};
				images.items.push(imageObject);
			});
			var title   = $('#postTitle input[type="text"]').val();
			var content = $('.rich-text-editor #postBody #textArea').html();
			// Remove Images From Text Editor
			$('.rich-text-editor #postBody #textArea img').remove();
			var contentText = $('.rich-text-editor #postBody #textArea').html();
			var dataObject = {
				title: title,
				content: content,
				contentText : contentText,
				images: images
			};

			$.ajax(
			{
				url: action,
				type: 'POST',
				dataType: 'JSON',
				cache: false,
				data : {
					data: JSON.stringify(dataObject)
				}, 
				complete: function(response)
				{
					callback(response.responseJSON);
				}
			});

		}

		// Set form action
		this.setAction = function(action)
		{

			this.action = action;
			$('.rich-text-editor #editorForm').attr('action', this.action);

		}

		this.defineEvents = function()
		{

			// Variables
			var postBody  		 = $('.rich-text-editor #postBody #textArea');
			var hiddenTextArea = $('.rich-text-editor #postBody #hiddenTextArea');
			var postSubmit     = $('.rich-text-editor .post-submit #createNewPost');
			var postTitle 		 = $('.post-title input[type="text"]');
			var emptyPostTitle = $('.post-title #reset');
			var addMedia = $('.add-media button');
			var formats  = $('.rich-text-editor .post-controls .text-format .formats');
			var bold     = formats.find('#bold');
			var italic   = formats.find('#italic');
			var underline = formats.find('#underline');
			var strikeThrough = formats.find('#strikeThrough');
			var formatBlock 	= formats.find('#formatBlock');
			var insertUnorderedList = formats.find('#insertUnorderedList');
			var insertOrderedList   = formats.find('#insertOrderedList');
			var justifyLeft   = formats.find('#justifyLeft');
			var justifyCenter = formats.find('#justifyCenter');
			var justifyRight  = formats.find('#justifyRight');
			var imageSettings = $('.rich-text-editor #postBody #textArea img');
			var undo  = formats.find('#undo');
			var redo  = formats.find('#redo');
			var addLink 		= formats.find('#addLink');
			var removeLink  = formats.find('#removeLink');
			var addHeadings = $('.rich-text-editor .post-controls .text-format #addHeadings');
			var fontFamily  = $('.rich-text-editor .post-controls .text-format #fontFamily');
			var fontSize    = $('.rich-text-editor .post-controls .text-format #fontSize');
			var fontColorPicker = formats.find('#fontColorPicker a');
			// Copy All Text to hidden "textarea"
			postSubmit.on('click', function() { hiddenTextArea.val( postBody.html() ); });
			// Post Title
			emptyPostTitle.on('click', function(e) { e.preventDefault(); postTitle.val('') });
			// Add Media
			addMedia.on('click', _addMedia);
			// Image Settings
			imageSettings.on('click', _updateImageSettings);
			// Link Settings
			addLink.on('click', _addLink);
			
			// Add Media Function
			function _addMedia()
			{

				// Save Selection
				var sel = _saveSelection();
				var mediaOverlay  = $('.rich-text-editor .media-overlay');
				var selectedImage = '';
				var fade = 100;
				// Open Add Media
				mediaOverlay.fadeIn(fade);
				mediaOverlay.on('mousedown', function() 
				{
					_restoreSelection(sel);
				});
				// Close Add Media
				mediaOverlay.find('.title #close').on('click', function(e)
				{ 
					e.preventDefault(); 
					_closeAddMedia();
				});
				/*Start Tabs*/
				var uploadTab = '.upload-tab';
				var urlTab 	  = '.url-tab';
					// Upload Tab Events
					/* Choose Files */
				mediaOverlay.find(uploadTab).find('.header #chooseFiles').on('click', function() 
				{ 
					$(this).parent().find('#chooseFilesInput').trigger('click');
				});
				mediaOverlay.find(uploadTab).find('.header #chooseFilesInput').on('change', function() 
				{ 
					
					// Preview Image
					var imagePath = '';
					var reader = new FileReader();
					var file  = $(this).prop('files')[0];
					
					try 
					{
						reader.readAsDataURL( file );
						reader.onload = function() 
						{ 
							_resizeImage(reader.result, function(src)
							{
								imagePath = src;
								var newImage = `
									<div class="img">
										<img src="`+imagePath+`" alt="">
										<div class="overlay">
											<a href="#" id="delete" title="delete">
												<i class="fas fa-times"></i>
											</a>
										</div>
									</div>
								`;
								mediaOverlay.find(uploadTab).find('.images').append(newImage);
								_updateImageSelection();
								_updateImageDeletion();
							});
					}
					} catch(e) 
					{
						// statements
						return true;
					}
					
					
				});
					/*Select Image*/
				function _updateImageSelection()
				{
					
					// Upload
					mediaOverlay.find(uploadTab).find('.images .img').on('click', function() 
					{ 
						$(this).addClass('selected').siblings().removeClass('selected');
						$(this).find('.overlay').css('display', 'block').parent().siblings().find('.overlay').css('display', 'none');
						selectedImage = $(this).find('img').attr('src');
						if ( selectedImage === '' )
							mediaOverlay.find('.footer #addSelected').addClass('disabled');
						else
							mediaOverlay.find('.footer #addSelected').removeClass('disabled');
					});
					// URL
					mediaOverlay.find(urlTab).find('.images img').on('click', function() 
					{ 
						$(this).addClass('selected');
						selectedImage = $(this).attr('src');
						if ( selectedImage === '' )
							mediaOverlay.find('.footer #addSelected').addClass('disabled');
						else
							mediaOverlay.find('.footer #addSelected').removeClass('disabled');
					});

				}
				_updateImageSelection();
					/*Delete Images*/
				function _updateImageDeletion()
				{
					mediaOverlay.find(uploadTab).find('.images .img .overlay #delete').on('click', function(e) 
					{ 
						e.preventDefault();
						$(this).parent().parent().remove();
					});
				}
				_updateImageDeletion();

				/*URL Tab Events*/
					// Image URL
				mediaOverlay.find(urlTab).find('.header #imageURL').on('input', function() 
				{
					
					var htmlIfEmpty = `
						<div class="info">
							<p>If your URL is correct, you'll see an image preview here.  Large images may take a few minutes to appear.</p>
							<p>Remember: Using others' images on the web without their permission may be bad manners, or worse, copyright infringement.</p>
						</div>
					`;
					if ( $(this).val() === '' )
						mediaOverlay.find(urlTab).find('.images').html(htmlIfEmpty);
					else
					{
						mediaOverlay.find(urlTab).find('.images').html('<img src="'+$(this).val()+'" class="img-fluid" alt="">');
						console.clear();
					}
					_updateImageSelection();

				});
					// Switch Between Tabs
				mediaOverlay.find('.tabs a').on('click', function(e) 
				{ 
					
					e.preventDefault();
					$(this).siblings().removeClass('active'); 
					$(this).addClass('active'); 
					
					if ( $(this).data('id') === 'upload' )					
						mediaOverlay.find(uploadTab).css('display', 'block').siblings(urlTab).css('display', 'none');	
					else if ( $(this).data('id') === 'url' ) 		
						mediaOverlay.find(urlTab).css('display', 'block').siblings(uploadTab).css('display', 'none');

				});
				/*End Tabs*/

				// Cancel Add Media
				mediaOverlay.find('.footer #cancel').on('click', function(e) 
				{ 
					e.preventDefault(); mediaOverlay.fadeOut(fade); 
					_closeAddMedia();
				});
				// Add Selected
				mediaOverlay.find('.footer #addSelected').on('click', function(e) 
				{ 
					e.preventDefault(); 
					_execCMD('insertImage', false, selectedImage);
					_closeAddMedia();
					imageSettings = $('.rich-text-editor #postBody #textArea img');
					imageSettings.on('click', _updateImageSettings);
				});

				// Remove Some Add Media Events
				function _removeAddMediaEvents()
				{

					mediaOverlay.off('mousedown');
					mediaOverlay.find('.title #close').off('click');
					mediaOverlay.find(uploadTab).find('.header #chooseFiles').off('click');
					mediaOverlay.find(uploadTab).find('.header #chooseFilesInput').off('change');
					mediaOverlay.find(uploadTab).find('.images .img').off('click');
					mediaOverlay.find(urlTab).find('.images img').off('click');
					mediaOverlay.find(uploadTab).find('.images .img .overlay #delete').off('click');
					mediaOverlay.find(urlTab).find('.header #imageURL').off('input');
					mediaOverlay.find('.footer #cancel').off('click');
					mediaOverlay.find('.footer #addSelected').off('click');

				}

				// Close Add Media
				function _closeAddMedia()
				{
					mediaOverlay.fadeOut(fade); 
					// Remove Some Events
					_removeAddMediaEvents();
				}

				// Resize image
				function _resizeImage(src, callback)
				{

					var img = new Image();
					img.src = src;
					img.onload = function(e)
					{
						var canvas	  = document.createElement("canvas");
			      var context   = canvas.getContext("2d");
			      var dataurl   = '';
			      const MAX_WIDTH  = 740;
			      const MAX_HEIGHT = 370;

		      	if ( (this.width > MAX_WIDTH) && (this.height < MAX_HEIGHT) )
			      {
			      	canvas.width  = MAX_WIDTH;
			      	canvas.height = this.height;
				      context.drawImage(e.target,0,0,canvas.width,canvas.height);
				      dataurl = canvas.toDataURL();
			      }
			      else if ( (this.width < MAX_WIDTH) && (this.height > MAX_HEIGHT) )
			      {
			      	canvas.width   = this.width;
			      	canvas.height  = MAX_HEIGHT;
				      context.drawImage(e.target,0,0,canvas.width,canvas.height);
				      dataurl = canvas.toDataURL();
			      }
			      else if ( (this.width > MAX_WIDTH) && (this.height > MAX_HEIGHT) )
			      {
			      	canvas.width  = MAX_WIDTH;
			      	canvas.height = MAX_HEIGHT;
				      context.drawImage(e.target,0,0,canvas.width,canvas.height);
				      dataurl = canvas.toDataURL();
			      }
			      else
			      	dataurl = src;

			      callback(dataurl);
					}

				}

			}

			// Image Settings Function
			function _updateImageSettings(e)
			{

				if ( e !== undefined )
					e.preventDefault(); 
				var $this = $(this);
				var fade  = 100;
				var imageControlsOverlay = $('.image-controls-overlay');
				var dismiss 			= imageControlsOverlay.find('.image-controls .title-bar #dismiss');
				var imageToAdjust = imageControlsOverlay.find('.image-controls .body img');
				var small 			= imageControlsOverlay.find('.image-controls .footer .sizes #small');
				var medium 			= imageControlsOverlay.find('.image-controls .footer .sizes #medium');
				var large 			= imageControlsOverlay.find('.image-controls .footer .sizes #large');
				var xlarge 		  = imageControlsOverlay.find('.image-controls .footer .sizes #x_large');
				var original 	  = imageControlsOverlay.find('.image-controls .footer .sizes #original');
				var viewport    = imageControlsOverlay.find('.image-controls .footer .sizes #viewport');
				var left        = imageControlsOverlay.find('.image-controls .footer .alignments #left');
				var center      = imageControlsOverlay.find('.image-controls .footer .alignments #center');
				var right       = imageControlsOverlay.find('.image-controls .footer .alignments #right');
				var properties  = imageControlsOverlay.find('.image-controls .footer .other-settings .properties #changeProperties');
				var remove      = imageControlsOverlay.find('.image-controls .footer .other-settings #remove');
				var saveChanges = imageControlsOverlay.find('.image-controls .changes-buttons #saveChanges');
				var cancel      = imageControlsOverlay.find('.image-controls .changes-buttons #cancel');
				// Show Image Controls
				imageControlsOverlay.fadeIn(fade);
				// Close Image Controls
				dismiss.on('click', function(e) 
				{ 
					e.preventDefault();
					_closeImageSettings();
				});
				// Get Image SRC For Preview
				imageToAdjust.attr('src', $(this).attr('src'));
				// Adjust Sizes
				var width  = $this.css('width');
				var height = $this.css('height');
				small.on('click', function() 
				{  
					width  = '200px';
					height = '67px';
					imageToAdjust.css('width', width).css('height', height);
				});
				medium.on('click', function() 
				{  
					width  = '320px';
					height = '108px';
					imageToAdjust.css('width', width).css('height', height);
				});
				large.on('click', function() 
				{  
					width  = '400px';
					height = '135px';
					imageToAdjust.css('width', width).css('height', height);
				});
				xlarge.on('click', function() 
				{  
					width  = '640px';
					height = '216px';
					imageToAdjust.css('width', width).css('height', height);
				});
				original.on('click', function() 
				{  
					width  = 'auto';
					height = 'auto';
					imageToAdjust.css('width', width).css('height', height);
				});
				viewport.on('click', function() 
				{  
					width  = '100vw';
					height = '100vh';
					imageToAdjust.css('width', width).css('height', height);
				});
				// Adjust Alignment
				var float   = $this.css('float');
				var margin  = $this.css('margin');
				var display = $this.css('display');
				left.on('click', function()
				{
					float   = 'left';
					margin  = '';
					display = 'inline-block';
					imageToAdjust.css('float', float).css('margin', margin).css('display', display);
				});
				center.on('click', function()
				{
					float   = 'none';
					margin  = 'auto';
					display = 'block';
					imageToAdjust.css('float', float).css('margin', margin).css('display', display);
				});
				right.on('click', function()
				{
					float   = 'right';
					margin  = '';
					display = 'inline-block';
					imageToAdjust.css('float', float).css('margin', margin).css('display', display);
				});
				// Other Settings
				var isRemoved = false;
				var title = imageControlsOverlay.find('.image-controls .footer .other-settings .properties #title');
				var alt 	= imageControlsOverlay.find('.image-controls .footer .other-settings .properties #alt');
				var src 	= imageControlsOverlay.find('.image-controls .footer .other-settings .properties #src');
				remove.on('click', function()
				{
					imageToAdjust.attr('src', '');
					isRemoved = true;
				});
				properties.on('click', function()
				{
					if ( title.val() !== '' )
						imageToAdjust.attr('title', title.val());
					if ( alt.val() !== '' )
						imageToAdjust.attr('alt', alt.val());
					if ( src.val() !== '' )
						imageToAdjust.attr('src', src.val());

					title.val('');
					alt.val('');
					src.val('');
				});
				// Save Changes
				saveChanges.on('click', function() 
				{
					_saveImageSettings();
					_closeImageSettings();
				});
				// Cancel Changes
				cancel.on('click', function() 
				{
					_closeImageSettings();
				});

				// Save Changes Function
				function _saveImageSettings()
				{
					
					// Size
					$this.css('width', width).css('height', height);
					// Position
					$this.css('float', float).css('margin', margin).css('display', display);
					// Remove
					if ( isRemoved )
						$this.remove();
					// Properties
					$this.attr('title', imageToAdjust.attr('title')).attr('alt', imageToAdjust.attr('alt')).attr('src', imageToAdjust.attr('src'));
					// Remove Events
					_removeImageSettingsEvents();

				}

				// Close Image Settings Function
				function _closeImageSettings()
				{
					imageControlsOverlay.fadeOut(fade);
					// Remove Events
					_removeImageSettingsEvents();
				}

				// Remove Events Function
				function _removeImageSettingsEvents()
				{
					dismiss.off('click');
					small.off('click');
					medium.off('click');
					large.off('click');
					xlarge.off('click');
					original.off('click');
					viewport.off('click');
					left.off('click');
					center.off('click');
					right.off('click');
					remove.off('click');
					properties.off('click');
					saveChanges.off('click');
					cancel.off('click');
				}

			}

			// Add Headings
			addHeadings.on('change', function() 
			{
				var hType = $(this).find('option:selected').data('tag');
				_execCMD('formatBlock', false, '<'+hType+'>');
			});

			// Change Font Family
			fontFamily.on('change', function() 
			{
				var fFamily = $(this).find('option:selected').data('name');
				_execCMD('fontName', false, ''+fFamily+'');
			});

			// Change Font Size
			fontSize.on('change', function() 
			{
				var fSize = $(this).find('option:selected').val();
				_execCMD('fontSize', false, fSize);
			});

			// Change Font Color
			fontColorPicker.on('mousemove', function() 
			{
				var fColor = $(this).data('color');
				var selectedColor = formats.find('#fontColorPicker #selectedColor');
				selectedColor.val(fColor).css('background', fColor).css('box-shadow', '0 0 5px '+fColor);
			}).on('click', function(e)
			{
				e.preventDefault();

				var fColor = $(this).data('color');
				_execCMD('foreColor', false, fColor);
			});

			// Text Formats Function
			function _textFormat()
			{

				bold.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				italic.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				underline.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				strikeThrough.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				formatBlock.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format'), false, '<blockquote>' ); });
				insertUnorderedList.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				insertOrderedList.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				justifyLeft.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				justifyCenter.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				justifyRight.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				undo.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });
				redo.on('click', function(e) { e.preventDefault(); _execCMD( $(this).data('format') ); });

			}

			// Add Link Function
			function _addLink(e)
			{

				if ( e !== undefined )
					e.preventDefault();

				var fade = 100;
				var sel = _saveSelection();
				var addLinkOverlay = $('.rich-text-editor .add-link-overlay');
				var dismiss = addLinkOverlay.find('.title-bar #dismiss');
				var webAddress     = addLinkOverlay.find('.body .properties .link-types #webAddress');
				var emailAddress   = addLinkOverlay.find('.body .properties .link-types #emailAddress');
				var ok 		 = addLinkOverlay.find('.changes-buttons #ok');
				var cancel = addLinkOverlay.find('.changes-buttons #cancel');
				// Open Link Settings
				addLinkOverlay.fadeIn(fade);
				// Save Selection
				addLinkOverlay.on('mousedown', function() 
				{ 		
					_restoreSelection(sel);
				});
				// Close Link Settings
				dismiss.on('click', function(e) 
				{
					e.preventDefault();
					_closeLinkSettings();
				});
				// Switch Between Link Types Tabs
				var tabID = 1;
				var textToDisplay 	 = addLinkOverlay.find('.body .text-to-display #textDisplay'); 
				textToDisplay.val( getSelectedText() );  // Put current selection in "Text to display"
				var webAddressTab 	 = addLinkOverlay.find('.body .properties .is-web-address');
				var emailAddressTab  = addLinkOverlay.find('.body .properties .is-email-address');
				var selectedClass 	 = 'selected';
				// Show "Web Address" Tab
				var linkAddress 	  = addLinkOverlay.find('.body .properties .is-web-address .link #linkAddress');
				var testLink 	 		  = addLinkOverlay.find('.body .properties .is-web-address .link #testLink'); 
				var openInNewWindow = addLinkOverlay.find('.body .properties .additional #openNewWindow'); 
				var addNoFollow 		= addLinkOverlay.find('.body .properties .additional #addNoFollow'); 
				var linkHTMLString  = '';
				webAddress.on('click', function(e)
				{
					e.preventDefault();
					$(this).addClass(selectedClass).siblings().removeClass(selectedClass);
					webAddressTab.css('display', 'block').siblings().css('display', 'none');
					tabID = 1;
				});
				// Test Link
				testLink.on('click', function() { $(this).attr('target', '_blank').attr('href', linkAddress.val()); });
				// Show "Email Address" Tab
				var mailToAddress = addLinkOverlay.find('.body .properties .is-email-address .link #mailToAddress');
				emailAddress.on('click', function(e)
				{
					e.preventDefault();
					$(this).addClass(selectedClass).siblings().removeClass(selectedClass);
					emailAddressTab.css('display', 'block').siblings().css('display', 'none');
					tabID = 2;
				});
				// Save Changes
				ok.on('click', function()
				{
					// Save
					_saveLinkSettingsChanges();
					// Close
					_closeLinkSettings();
				});
				// Cancel Changes
				cancel.on('click', function()
				{
					_closeLinkSettings();
				});

				// Close Link Settings Function
				function _closeLinkSettings()
				{
					addLinkOverlay.fadeOut(fade);
					// Remove Events
					_removeLinkSettingsEvents();
				}
				// Save Changes Function
				function _saveLinkSettingsChanges()
				{
					// Save Link Changes
					if ( tabID == 1 )
					{
						linkHTMLString = '<a href="'+linkAddress.val()+'"';
						if ( openInNewWindow.is(':checked') )
							linkHTMLString += ' target="_blank"';
						if ( addNoFollow.is(':checked') )
							linkHTMLString += ' rel="nofollow"';

						linkHTMLString += '>'+textToDisplay.val()+'</a>';
						_execCMD('insertHTML', false, linkHTMLString);	
					}
					else if ( tabID == 2 )
					{
						linkHTMLString = '<a href="mailto:'+mailToAddress.val()+'"';
						if ( openInNewWindow.is(':checked') )
							linkHTMLString += ' target="_blank"';
						if ( addNoFollow.is(':checked') )
							linkHTMLString += ' rel="nofollow"';

						linkHTMLString += '>'+textToDisplay.val()+'</a>';
						_execCMD('insertHTML', false, linkHTMLString);
					}
					
				}

				function _removeLinkSettingsEvents()
				{

					addLinkOverlay.off('mousedown');
					dismiss.off('click');
					webAddress.off('click');
					testLink.off('click');
					emailAddress.off('click');
					ok.off('click');
					cancel.off('click');

				}

			}
			// Remove Link
			removeLink.on('click', function(e) { e.preventDefault(); _execCMD('unlink'); });
			// Text Formats
			_textFormat();

		}

		// Get Current Selected Text
		function getSelectedText() 
		{
	    
	    var text = "";
	    if (window.getSelection) {
	        text = window.getSelection().toString();
	    } else if (document.selection && document.selection.type != "Control") {
	        text = document.selection.createRange().text;
	    }
	    return text;

		}
		// Exec Commands
		function _execCMD(name, defaultUI = false, value = null)
		{
			//document.designMode = 'on';
			document.execCommand(name, defaultUI, value);
			//document.designMode = 'off';
		}
		// Save Selection on Current Text
		function _saveSelection() 
    {
      var sel = window.getSelection(), ranges = [];
      if (sel.rangeCount) 
      {
        for (var i = 0, len = sel.rangeCount; i < len; ++i) 
          ranges.push(sel.getRangeAt(i));
      }
      return ranges;
    }

		function _restoreSelection(savedSelection) 
		{
		  var sel = window.getSelection();
		  sel.removeAllRanges();
		  for (var i = 0, len = savedSelection.length; i < len; ++i) 
		    sel.addRange(savedSelection[i]);
		}

		// Call Member Functions
		this.defineEvents();

	}

});