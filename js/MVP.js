const mvpData = [
    { img: "https://www.akibacampus.com/image/MVP/29.jpg", title: "MOKUTAN WS企画・開催したで賞", name: "白詰草さん" },
];

// ギャラリーを生成する関数
function generateGallery() {
    const galleryElement = document.getElementById('gallery');
    
    mvpData.forEach(mvp => {
        const card = document.createElement('div');
        card.className = 'mvp-card';
        
        card.innerHTML = `
            <div class="mvp-card">
                <div class="mvp-card-content">
                    <img src="${mvp.img}" class="mvp-img">
                    <p class="mvp-card-title">${mvp.title}</p>
                    <p class="mvp-card-para">${mvp.name}</p>
                </div>
            </div>
        `;
        
        galleryElement.appendChild(card);
    });
}

// ページ読み込み時にギャラリーを生成
window.onload = generateGallery;