const mvpData = [
    { img: "https://www.akibacampus.com/image/MVP/88.png", title: "日誌のコメントまできっちり書けたで賞", name: "フィッシュさん" },
    { img: "https://www.akibacampus.com/image/MVP/89.png", title: "日誌のコメントまできっちり書けたで賞", name: "ヨッシーさん" },
    { img: "https://www.akibacampus.com/image/MVP/90.png", title: "日誌のコメントまできっちり書けたで賞", name: "マスカッtさん" },
    { img: "https://www.akibacampus.com/image/MVP/91.png", title: "日誌のコメントまできっちり書けたで賞", name: "最中さん" },
    { img: "https://www.akibacampus.com/image/MVP/92.png", title: "日誌のコメントまできっちり書けたで賞", name: "み.Mさん" },
    { img: "https://www.akibacampus.com/image/MVP/93.png", title: "日誌のコメントまできっちり書けたで賞", name: "issei_miyamotoさん" },
    { img: "https://www.akibacampus.com/image/MVP/94.png", title: "日誌のコメントまできっちり書けたで賞", name: "Koushinさん" },
    { img: "https://www.akibacampus.com/image/MVP/95.png", title: "日誌のコメントまできっちり書けたで賞", name: "STさん" },
    { img: "https://www.akibacampus.com/image/MVP/96.png", title: "ワークシートたくさんうめられたで賞", name: "あやかさん" },
    { img: "https://www.akibacampus.com/image/MVP/97.png", title: "ワークシートたくさんうめられたで賞", name: "白詰草さん" },
    { img: "https://www.akibacampus.com/image/MVP/98.png", title: "ワークシートたくさんうめられたで賞", name: "ローマ字兄貴さん" },
    { img: "https://www.akibacampus.com/image/MVP/99.png", title: "ワークシートたくさんうめられたで賞", name: "み.Mさん" },
    { img: "https://www.akibacampus.com/image/MVP/100.png", title: "ワークシートたくさんうめられたで賞", name: "airaさん" },
    { img: "https://www.akibacampus.com/image/MVP/101.png", title: "ワークシートたくさんうめられたで賞", name: "sanさん" },
    { img: "https://www.akibacampus.com/image/MVP/102.png", title: "ワークシートたくさんうめられたで賞", name: "adobeアンチさん" },
    { img: "https://www.akibacampus.com/image/MVP/103.png", title: "挨拶のとき切り替えが早いで賞", name: "Koushinさん" },
    { img: "https://www.akibacampus.com/image/MVP/104.png", title: "挨拶のとき切り替えが早いで賞", name: "ヨッシーさん" },
    { img: "https://www.akibacampus.com/image/MVP/105.png", title: "挨拶のとき切り替えが早いで賞", name: "マスカッtさん" },
    { img: "https://www.akibacampus.com/image/MVP/106.png", title: "挨拶のとき切り替えが早いで賞", name: "ゆきとさん" },
    { img: "https://www.akibacampus.com/image/MVP/107.png", title: "挨拶のとき切り替えが早いで賞", name: "かめ_ESETアンチさん" },
    { img: "https://www.akibacampus.com/image/MVP/108.png", title: "挨拶のとき切り替えが早いで賞", name: "Sさん" },
    { img: "https://www.akibacampus.com/image/MVP/109.png", title: "ハロウィンなりきり賞", name: "フィッシュさん" },
    { img: "https://www.akibacampus.com/image/MVP/110.png", title: "ハロウィンなりきり賞", name: "Koushinさん" },
    { img: "https://www.akibacampus.com/image/MVP/111.png", title: "ハロウィンなりきり賞", name: "セフィロスアンチさん" },
    { img: "https://www.akibacampus.com/image/MVP/112.png", title: "ハリウィンなりきり賞", name: "フィッシュさん" },
    { img: "https://www.akibacampus.com/image/MVP/113.png", title: "ハロウィンなりきり賞", name: "GBG推さん" },
    { img: "https://www.akibacampus.com/image/MVP/114.png", title: "ハロウィンなりきり賞", name: "hatchington_ひらがなはっちさん" },
    { img: "https://www.akibacampus.com/image/MVP/115.png", title: "ハリウィンなりきり賞", name: "koukiさん" }, 
];

// ギャラリーを生成する関数
function generateGallery() {
    const galleryElement = document.getElementById('gallery');
    
    mvpData.forEach(mvp => {
        const card = document.createElement('div');
        card.className = 'mvp-card-content';
        
        card.innerHTML = `
            <div class="mvp-card-content">
                <img src="${mvp.img}" class="mvp-img">
                <p class="mvp-card-title">${mvp.title}</p>
                <p class="mvp-card-para">${mvp.name}</p>
            </div>
        `;
        
        galleryElement.appendChild(card);
    });
}

// ページ読み込み時にギャラリーを生成
window.onload = generateGallery;