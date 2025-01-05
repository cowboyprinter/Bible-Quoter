# Generate random book quotes
# using
# Bible-Quoter

## Project Description
Bible-Quoter is a web application that displays a randomly generated quote from the Bible. The project is designed to be a starting point for developers to add generative sound and images to enhance the UI/UX. Additionally, the Bible can be interchanged with an API to any favorite book, and the quotations can be translated into any desired language. Help expand the functionality!

## Key Features
- Displays a random Bible quote on page load.
- Simple and clean UI for displaying the quote.
- Button to generate a new random quote.
- Easily extendable to include sound, images, and other books via APIs.
- Supports translation of quotes into different languages.

# Here is a screenshot of the main UX/UI and another potential branch version in a visual Dark Theme mode  
![Bible Quoter Screenshot](scripts/images/Bible%20Quoter%20Screenshot%202025-01-05%20111314.png)


![Bible Quoter Dark screenshot](scripts/images/Bible%20Quoter%20Dark%20screenshot%20Screenshot%202025-01-05%20114046.png)
## Getting Started

 ### Prerequisites
- A web browser to view the application.
- Basic knowledge of HTML, CSS, and JavaScript.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/cowboyprinter/Bible-Quoter.git
   cd Bible-Quoter
Open the index.html file in your web browser:
open index.html
Usage
The web page will display a random Bible quote upon loading.
Click the "New Quote!" button to fetch and display a new random quote.
Customization
Change the source of quotes:
Modify the bible variable in the script to point to a different API that returns quotes from your favorite book.

var bible = 'https://labs.bible.org/api/?passage=random&type=json'; // Change this URL to your desired API
Add generative sound and images:
Integrate your preferred sound and image generation libraries into the project to enhance the user experience.

Translate quotes:
Use a translation API (e.g., Google Translate API) to translate the fetched quotes into the desired language.

Contributing
We welcome contributions from the community! Feel free to open an issue or submit a pull request with your improvements and new features.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Example Code
Here is an example of the core code used in the project:

HTML
<!DOCTYPE html>
<html>
<head>
    <style>
        #bibleQuote {
            background-color: #eee;
            color: #a0a;
            margin: 300px auto 0;
            font-size: 40px;
            width: 90vw;
            padding: 40px;
            border-radius: 20px;
        }
        .reload-button {
            /* Add styles for the reload button if needed */
        }
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var bible = 'https://labs.bible.org/api/?passage=random&type=json';
            var xhr = new XMLHttpRequest();
            xhr.open('GET', bible, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response && response.length > 0) {
                        var text = response[0].text;
                        var quoteDiv = document.getElementById("bibleQuote");
                        quoteDiv.textContent = text;
                    }
                }
            };
            xhr.send();
        });
        function reloadPage() {
            location.reload();
        }
    </script>
</head>
<body style="margin: 0;">
    <div id="bibleQuote"></div>
    <button onclick="reloadPage()" class="reload-button">New Quote!</button>
</body>
</html>
Contact
For any questions or suggestions, please reach out to us at 
   info@cowboyprinter.com.

Happy coding!

Code
### Adding the MIT License

To add the MIT License to your repository, follow these steps:

1. Go to your repository on GitHub.
2. Click on the "Add file" button and select "Create new file".
3. Name the file `LICENSE`.
4. Copy and paste the following MIT License text into the file:
    ```text
    MIT License

    Copyright (c) 2025 cowboyprinter

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    ```
5. Scroll down to the "Commit new file" section.
6. Add a commit message, such as "Add MIT License".
7. Choose to commit directly to the `main` branch or create a new branch and start a pull request.
8. Click the "Commit new file" button to save the license to your repository.

Your repository will now have the MIT License, allowing others to use, modify, and distribute
