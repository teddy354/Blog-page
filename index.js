let data = []

function addData(event) {


    let title = document.getElementById("project-name").value;
    let stratDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let content = document.getElementById("description-box").value;
    let image = document.getElementById("upload-image").files;

    if(title === "") {
        return alert("Diisi dulu boss")
    } else if (stratDate === "") {
      return alert("Data gak ada")
    } else if (endDate === "") {
      return alert("Data masih kosong")
    } else if(content === "") {
        return alert("Gak boleh kosong dong")
    } else if (image == "" ) {
        return alert("Mau liat fotomu dong")
    }

    let gambar = URL.createObjectURL(image[0])

    console.log("gambar", image[0])
    console.log("gambar dengan path", gambar)

    let blog = {
        title,
        content,
        gambar,
        postAt: new Date(),
        author: "Teddy Hebat"
    }

    data.push(blog)
    console.log(data)
    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ``
    for (let index = 0; index < data.length; index++) {
        document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[index].gambar}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">${data[index].title}</a>
      </h1>
      <div class="detail-blog-content">
      ${data[index].postAt} | ${data[index].author}
      </div>
      <p>
      ${data[index].content}
      </p>
    </div>
  </div>`
    }
}