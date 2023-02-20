function handleSearch(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const query = document.getElementById("input1").value;
  
    const api_key = "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";
    const model = "image-alpha-001";
    const prompt = query;
    const response_format = "url";
    const num_images = 3;
  
    const headers = {
      "Authorization": `Bearer ${api_key}`,
      "Content-Type": "application/json",
    };
  
    const data = {
      "model": model,
      "prompt": prompt,
      "response_format": response_format,
      "num_images": num_images,
    };
  
    fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      const image_urls = result.data.map(image => image.url);

      const imgElements = document.querySelectorAll('.example-img');

        // Loop over all the images and update their src attributes
  imgElements.forEach((img, index) => {
    img.addEventListener('load', () => {
      // When the image is loaded, update the next image in the list
      const nextIndex = index + 1
      if (nextIndex < imgElements.length) {
        const nextImg = imgElements[nextIndex];
        nextImg.src = image_urls[nextIndex];
      }
    });
    img.src = image_urls[index];
  });
      

})
.catch(error => console.error(error));
}
  
const form = document.getElementById("form1");
form.addEventListener("submit", handleSearch);



