// Sample data (hypothetical)
const files = [
    { name: 'Webpage', category: 'URL', type: 'link', url: 'https://smetnst.github.io/SME_16/Webpage.html' },
    { name: 'Google', category: 'URL', type: 'link', url: 'https://www.google.com' },
    { name: 'Youtube', category: 'URL', type: 'link', url: 'https://www.youtube.com' },
    { name: 'Canva', category: 'URL', type: 'link', url: 'https://www.canva.com' },
    { name: 'ChatGPT', category: 'URL', type: 'link', url: 'https://chat.openai.com/' },
    

    { name: 'Pad A', category: 'Document', type: 'link', url: 'AAA.txt'},
    { name: 'Namem110', category: 'Document', type: 'link', url: 'JKL.txt'},
    { name: 'leaderm110', category: 'Document', type: 'link', url: 'AAB.txt'},
    
    // Add more files and categories as needed
  ];
  
  function search() {
    const searchInput = document.getElementById('search-input').value;
    const categorySelect = document.getElementById('category-select').value;
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
  
    files.forEach(function(file) {
      if (
        (searchInput === '' || file.name.toLowerCase().includes(searchInput.toLowerCase())) &&
        (categorySelect === '' || file.category === categorySelect)
      ) {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
  
        const fileTitle = document.createElement('p');
        fileTitle.textContent = `File: ${file.name}, Category: ${file.type}`;
        resultItem.appendChild(fileTitle);
  
        if (file.type === 'link') {
          const link = document.createElement('a');
          link.href = file.url;
          link.textContent = 'Open';
          resultItem.appendChild(link);

        } else if (file.type === 'text') {
          const textContent = document.createElement('p');
          textContent.textContent = file.content;
          resultItem.appendChild(textContent);
        } else {
          const notSupportedMsg = document.createElement('p');
          notSupportedMsg.textContent = 'Error Files !!!';
          resultItem.appendChild(notSupportedMsg);
        }
  
        searchResults.appendChild(resultItem);
      }
    });
  }  
