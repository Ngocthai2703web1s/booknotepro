const images = [
    {
        src: "https://ebookvie.com/wp-content/uploads/2023/12/ebook-10-bi-quyet-thanh-cong-cua-cac-mc-dien-gia-full-prc-pdf-epub-azw3.jpg",
        name: "[2024] 10 Bí Quyết Thành Công Của Những Diễn Giả MC Tài Năng Nhất Thế Giới - Carmine Gallo",
        downloadLink: "https://tinyurl.com/4bnr2ekd"
    },
    {
        src: "https://ebookvie.com/wp-content/uploads/2023/12/10-buoc-de-co-cuoc-song-tron-ven-dale-carnegie.jpg",
        name: "[2024] 10 Bước Để Có Cuộc Sống Trọn Vẹn - Dale Carnegie",
        downloadLink: "https://tinyurl.com/u5zurahn"
    },
    {
        src: "https://ebookvie.com/wp-content/uploads/2023/12/ebook-10-cau-noi-van-nang-full-prc-pdf-epub-azw3.jpg",
        name: "[2024] 10 Câu Nói Vạn Năng – Rich DeVos",
        downloadLink: "https://tinyurl.com/48ym7cxv"
    }
];

// Sắp xếp danh sách từ Z đến A dựa trên chuỗi tên đầy đủ (bao gồm cả ngày tháng)
images.sort((a, b) => b.name.localeCompare(a.name));

// Hàm hiển thị danh sách ảnh
function displayImages(filteredImages) {
    const imageList = document.getElementById('image-list');
    imageList.innerHTML = ''; // Xóa nội dung cũ

    filteredImages.forEach(image => {
        const listItem = document.createElement('li');

        // Phần chứa ảnh
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.style.marginRight = '20px';

        // Phần chứa tên và nút download
        const textContainer = document.createElement('div');

        const titleElement = document.createElement('h3');
        const nameOnly = image.name.match(/\] (.+)/)[1]; // Hiển thị chỉ phần tên sau dấu ]
        titleElement.textContent = nameOnly;

        const buttonContainer = document.createElement('div');
        buttonContainer.style.marginTop = '50px';

        const downloadButton = document.createElement('a');
        downloadButton.href = image.downloadLink;
        downloadButton.textContent = 'Download';
        downloadButton.className = 'button';
        downloadButton.target = '_blank'; // Mở liên kết trong tab mới

        buttonContainer.appendChild(downloadButton);

        textContainer.appendChild(titleElement);
        textContainer.appendChild(buttonContainer);

        listItem.appendChild(imgElement);
        listItem.appendChild(textContainer);

        imageList.appendChild(listItem);
    });
}

// Hiển thị danh sách ảnh ban đầu
displayImages(images);

// Tìm kiếm ảnh
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    // Lọc danh sách ảnh dựa trên từ khóa tìm kiếm
    const filteredImages = images.filter(image => {
        const nameOnly = image.name.match(/\] (.+)/)[1].toLowerCase();
        return nameOnly.includes(searchTerm);
    });

    // Hiển thị danh sách ảnh đã lọc
    displayImages(filteredImages);
});
