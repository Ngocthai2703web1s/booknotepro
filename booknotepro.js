const images = [
    {
        src: "#",
        name: "[2024] 10 Bí Quyết Thành Công Của Những Diễn Giả MC Tài Năng Nhất Thế Giới - Carmine Gallo",
        downloadLink: "/data/657941664.epub"
    },
    {
        src: "#",
        name: "[2024] 10 Bước Để Có Cuộc Sống Trọn Vẹn - Dale Carnegie",
        downloadLink: "/data/938904112.epub"
    },
    {
        src: "#",
        name: "[2024] 10 Câu Nói Vạn Năng – Rich DeVos",
        downloadLink: "/data/654618374.epub"
    }
];

// Sắp xếp danh sách từ Z đến A dựa trên chuỗi tên
images.sort((a, b) => b.name.localeCompare(a.name, 'vi', { sensitivity: 'base' }));

function displayImages(filteredImages) {
    const imageList = document.getElementById('image-list');
    imageList.innerHTML = '';

    if (filteredImages.length === 0) {
        imageList.innerHTML = '<p>Không tìm thấy kết quả.</p>';
        return;
    }

    filteredImages.forEach(image => {
        const listItem = document.createElement('li');
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.style.marginRight = '20px';

        const textContainer = document.createElement('div');
        const titleElement = document.createElement('h3');

        const nameOnlyMatch = image.name.match(/\] (.+)/);
        const nameOnly = nameOnlyMatch ? nameOnlyMatch[1] : image.name;
        titleElement.textContent = nameOnly;

        const buttonContainer = document.createElement('div');
        buttonContainer.style.marginTop = '50px';

        const downloadButton = document.createElement('a');
        downloadButton.href = image.downloadLink;
        downloadButton.textContent = 'Download';
        downloadButton.className = 'button';
        downloadButton.target = '_blank';

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
document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredImages = images.filter(image => {
        const nameOnlyMatch = image.name.match(/\] (.+)/);
        const nameOnly = nameOnlyMatch ? nameOnlyMatch[1].toLowerCase() : '';
        return nameOnly.includes(searchTerm);
    });
    displayImages(filteredImages);
});
