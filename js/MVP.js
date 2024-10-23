const mvpData = [
    { img: "https://www.akibacampus.com/image/MVP/37.png", title: "ポートフォリオコツコツ記録できたで賞", name: "かわずさん" },
    { img: "https://www.akibacampus.com/image/MVP/38.png", title: "ポートフォリオコツコツ記録できたで賞", name: "しまさん" },
    { img: "https://www.akibacampus.com/image/MVP/39.png", title: "ポートフォリオコツコツ記録できたで賞", name: "白詰草さん" },
    { img: "https://www.akibacampus.com/image/MVP/40.png", title: "ポートフォリオコツコツ記録できたで賞", name: "ヨッシーさん" },
    { img: "https://www.akibacampus.com/image/MVP/41.png", title: "ポートフォリオコツコツ記録できたで賞", name: "サンズさん" },
    { img: "https://www.akibacampus.com/image/MVP/42.png", title: "ポートフォリオコツコツ記録できたで賞", name: "Airaさん" },
    { img: "https://www.akibacampus.com/image/MVP/43.png", title: "ポートフォリオコツコツ記録できたで賞", name: "めめんとさん" },
    { img: "https://www.akibacampus.com/image/MVP/44.png", title: "ポートフォリオコツコツ記録できたで賞", name: "はまチキさん" },
    { img: "https://www.akibacampus.com/image/MVP/45.png", title: "基礎学習超集中できたで賞", name: "メロンさん" },
    { img: "https://www.akibacampus.com/image/MVP/46.png", title: "基礎学習超集中できたで賞", name: "四宮さん" },
    { img: "https://www.akibacampus.com/image/MVP/47.png", title: "基礎学習超集中できたで賞", name: "四宮さん" },
    { img: "https://www.akibacampus.com/image/MVP/48.png", title: "基礎学習超集中できたで賞", name: "赤柴さん" },
    { img: "https://www.akibacampus.com/image/MVP/49.png", title: "基礎学習超集中できたで賞", name: "かめさん" },
    { img: "https://www.akibacampus.com/image/MVP/50.png", title: "基礎学習超集中できたで賞", name: "yunaさん" },
    { img: "https://www.akibacampus.com/image/MVP/51.png", title: "基礎学習超集中できたで賞", name: "りんごさん" },
    { img: "https://www.akibacampus.com/image/MVP/52.png", title: "基礎学習超集中できたで賞", name: "Kaitoさん" },
    { img: "https://www.akibacampus.com/image/MVP/53.png", title: "基礎学習超集中できたで賞", name: "STさん" },
    { img: "https://www.akibacampus.com/image/MVP/54.png", title: "基礎学習超集中できたで賞", name: "白詰草さん" },
    { img: "https://www.akibacampus.com/image/MVP/55.png", title: "基礎学習超集中できたで賞", name: "マスカッtさん" },
    { img: "https://www.akibacampus.com/image/MVP/56.png", title: "ws)でアルバイトをしたい理由を深く考えられたで賞", name: "しらすさん" },
    { img: "https://www.akibacampus.com/image/MVP/57.png", title: "ws)でアルバイトをしたい理由を深く考えられたで賞", name: "Koushinさん" },
    { img: "https://www.akibacampus.com/image/MVP/58.png", title: "ws)でアルバイトをしたい理由を深く考えられたで賞", name: "しゅーくりーむさん" },
    { img: "https://www.akibacampus.com/image/MVP/59.png", title: "ws)でアルバイトをしたい理由を深く考えられたで賞", name: "STさん" },
    { img: "https://www.akibacampus.com/image/MVP/60.png", title: "話を聞くときの姿勢がいいで賞", name: "Harukaさん" },
    { img: "https://www.akibacampus.com/image/MVP/62.png", title: "話を聞くときの姿勢が良いで賞", name: "めめんとさん" },
    { img: "https://www.akibacampus.com/image/MVP/63.png", title: "話を聞くときの姿勢が良いで賞", name: "森ナガレさん" },
    { img: "https://www.akibacampus.com/image/MVP/64.png", title: "話を聞くときの姿勢が良いで賞", name: "Kaitoさん" },
    { img: "https://www.akibacampus.com/image/MVP/65.png", title: "話を聞くときの姿勢が良いで賞", name: "RIさん" },
    { img: "https://www.akibacampus.com/image/MVP/66.png", title: "話を聞くときの姿勢が良いで賞", name: "ヨッシーさん" },
    { img: "https://www.akibacampus.com/image/MVP/67.png", title: "話を聞くときの姿勢が良いで賞", name: "白詰草さん" },
    { img: "https://www.akibacampus.com/image/MVP/68.png", title: "話を聞くときの姿勢が良いで賞", name: "Airaさん" },
    { img: "https://www.akibacampus.com/image/MVP/69.png", title: "グッドアイデア賞", name: "フィッシュさん" },
    { img: "https://www.akibacampus.com/image/MVP/70.png", title: "グッドアイデア賞", name: "み.Mさん" },
    { img: "https://www.akibacampus.com/image/MVP/71.png", title: "グッドアイデア賞", name: "瑠々華さん" },
    { img: "https://www.akibacampus.com/image/MVP/72.png", title: "グッドアイデア賞", name: "たまごさん" },
    { img: "https://www.akibacampus.com/image/MVP/73.png", title: "グッドアイデア賞", name: "瀧口将人さん" },
    { img: "https://www.akibacampus.com/image/MVP/74.png", title: "グッドアイデア賞", name: "サンズさん" },
    { img: "https://www.akibacampus.com/image/MVP/75.png", title: "リアクションをして相手が話し安い環境を作ってくれたで賞", name: "漆原聖仁さん" },
    { img: "https://www.akibacampus.com/image/MVP/76.png", title: "リアクションをして相手が話し安い環境を作ってくれたで賞", name: "TABS好き男" },
    { img: "https://www.akibacampus.com/image/MVP/77.jpg", title: "リアクションをして相手が話し安い環境を作ってくれたで賞", name: "ばななさん" },
    { img: "https://www.akibacampus.com/image/MVP/78.jpg", title: "LT登壇頑張ったで賞", name: "荻野少年さん" },
    { img: "https://www.akibacampus.com/image/MVP/79.jpg", title: "LT登壇頑張ったで賞", name: "サンズさん" },
    { img: "https://www.akibacampus.com/image/MVP/80.jpg", title: "元気な挨拶で賞", name: "issei_miyamotoさん" },
    { img: "https://www.akibacampus.com/image/MVP/81.jpg", title: "元気な挨拶で賞", name: "フィッシュさん" },
    { img: "https://www.akibacampus.com/image/MVP/82.jpg", title: "元気な挨拶で賞", name: "ローマ字兄貴さん" },
    { img: "https://www.akibacampus.com/image/MVP/83.jpg", title: "元気な挨拶で賞", name: "STさん" },
    { img: "https://www.akibacampus.com/image/MVP/84.jpg", title: "元気な挨拶で賞", name: "Airaさん" },
    { img: "https://www.akibacampus.com/image/MVP/85.jpg", title: "元気な挨拶で賞", name: "やくにくESETアンチさん" },
    { img: "https://www.akibacampus.com/image/MVP/86.jpg", title: "元気な挨拶で賞", name: "Kousinさん" },
    { img: "https://www.akibacampus.com/image/MVP/87.jpg", title: "元気な挨拶で賞", name: "しゅーくりーむさん" }    
];

// ギャラリーを生成する関数
function generateGallery() {
    const galleryElement = document.getElementById('gallery');
    
    mvpData.forEach(mvp => {
        const card = document.createElement('div');
        card.className = 'MVPArea';
        
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