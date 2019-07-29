# Rich Text Editor v0.1
WYSIWYG is an acronym for What You See Is What You Get. In computing, a WYSIWYG editor is a system in which content (text and graphics) can be edited in a form closely resembling its appearance when printed or displayed as a finished product, such as a printed document, web page, or slide presentation.

Rich Text Editor is a free, open source WYSIWYG editor built for the modern web. Completely customize it for any need with its modular architecture and expressive API.

## Thank you for using our designs :)

=====Developer Info======

* Fullname: Abdennour Adouani
* Country: Algeria
* Profession: Web Design and Development (Front End and Back End)
* Facebook: https://www.facebook.com/haloce.dark
* Email: not provided for security

=========================

## Navigation:
1. [Requirements](#Requirements).
2. [Installation](#Installation).
3. [How to use](#How-to-use).
4. [Submit to php file](#Submit-to-php-file).
5. [Submit to php file using Ajax](#Submit-to-php-file-using-Ajax).

### Requirements:
This "Rich Text Editor" uses the following:

- bootstrap (css, js).
- popper.js (for drop downs).
- font-awesome (css only).

All those files above are available with the editor, so you just need to include them.

Note: include order is required to avoid "File not found errors" or such.
### Installation:
Your includes should be like this:

Before the ```</head>``` tag add:
  ```
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/all.min.css">
  <link rel="stylesheet" type="text/css" href="css/wysiwyg.min.css">
  <link rel="stylesheet" type="text/css" href="css/your-style.css">
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  ```
Before the ```</body>``` tag add:
  ```
  <script type="text/javascript" src="js/popper.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/wysiwyg.min.js"></script>
  <script type="text/javascript" src="js/your-script.js"></script>
  ```
**Or You Can Include Those Files Only:**
  
Before the ```</head>``` tag add:
  ```
  <link rel="stylesheet" type="text/css" href="css/wysiwyg.all.min.css">
  <link rel="stylesheet" type="text/css" href="css/your-style.css">
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  ```
Before the ```</body>``` tag add:
  ```
  <script type="text/javascript" src="js/wysiwyg.all.min.js"></script>
  <script type="text/javascript" src="js/your-script.js"></script>
  ```
### How to use:

In your javascript file inside ```$( document ).ready(function() {});``` jquery function:
1. Create new instance of ```RichTextEditor()``` class and pass parent element for the editor like this:
```
   
var richTextEditor = new RichTextEditor( $('.wysiwyg-wrapper') );
   
$('.wysiwyg-wrapper') // this is a div element created in the DOM where we're going to put the editor
  
```
2. You're done.

### Submit to php file:

This is how to submit editor info to for EX: ```new-post.php``` file:
1. After you created new instance of editor class, you'll have access to manipulate editor's default behaviour for EX: form "action" attribute, let's set it to our file above so that our editor will send info to allow us to process those info in that file, we'll do that with simple steps:
```
richTextEditor.setAction('new-post.php'); // This will set editor form "action" attribute to 'new-post.php'
```
2. That's it, now go to your browser and "inspect elements", notice that form "action" is set to our file.
3. Now when you inspected page elements you can see editor form elements **name** attribute to handle them in that php file we've set, easy squeezy :).
4. You're done.

### Submit to php file using Ajax:

1. Make sure you're submitting to the right file: 
```
richTextEditor.setAction('new-post.php');
```
2. Select Editor submit button or form using JQuery:
```
$('.rich-text-editor #editorForm').on('submit', function(e)
{
  e.preventDefault(); // To prevent editor form from redirecting you to our file we set above 'new-post.php'
});
```
3. Call submit method with callback function to get response back:
	
```
$('.rich-text-editor #editorForm').on('submit', function(e)
{
  e.preventDefault(); // To prevent form from redirecting to out file we set above 'new-post.php'
  richTextEditor.submit(function(data)
  {
    console.log(data); // data is returned as JSON so make sure you encode it in php using "json_encode()" function before calling this     method
  });
});
```
4. After sending data to our PHP file 'new-post.php', now we need to decode it in our php file, because we actually sent a JSON Object as string using "json.stringify" JavaScript method.
    
```
$data = json_decode($_POST['data'], true);  // Decode JSON Data
if ( isset($data) ) 
{
  echo json_encode($data); // Just to see how the data is looking like, send it back to out JavaScript to console.log(data) from last step
}
```
    
5. Notice that our variable we send using richTextEditor.submit() method is called "data", so that to keep in mind!
6. You're done.

**Note: You can always select editor elements using JavaScript or JQuery.**

If you like my application rate it and share with others.

============Thank you================
