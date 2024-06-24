window.onload = function() {
    // 作品の画像
    const images = [
        'https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/AllWork/image/Angeltyan.png',
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/AnimalHotSpringirast.png",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/GandomBall.png",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/hotroom.png",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/redboxvspurplebox.png",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/skytower.png",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/taxcalculatorapp.png",
    ];

    // 作品のタイトル
    const Titles = [
        "オリキャラてんしちゃん",
        "温泉",
        "ボール",
        "暖色部屋",
        "赤箱vs紫箱",
        "Skytower",
        "税金計算アプリ",
    ];

    // 作品の説明

    const Details = [
        "ChromeCanvasというサイトで絵を描きました",
        "動物たちが温泉に入っている絵を描きました。",
        "機動戦士ガンダムに登場するボールという機体をBlenderで再現してみました。",
        "机と椅子",
        "球をぶっ放すして赤箱を破壊するゲーム",
        "テレビゲーム「星のカービィ Wii」の曲「スカイタワー」のピアノ",
        "消費税、所得税（製作中）、法人税（製作中）を計算できるアプリを製作している。",
    ];

    const Links = [
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/Work/Angeltyan/angeltyan.html",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/Work/AnimalHotSpringirast/animalhotspringirast",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/Work/GandomBall/gandomball.html",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/Work/Hotroom/hotroom.html",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/Work/redboxvspurplebox/RedBoxvsPurpleBox.html",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/Work/Skytower/skytower.html",
        "https://kaito1108.github.io/Nmiddleschool-AKIBACampus-Site/Work/TaxCalculatorApp/TaxCalculatorApp.html",
    ]

    // ランダムなインデックスを生成
    const randomIndex1 = Math.floor(Math.random() * images.length);
    const randomIndex2 = Math.floor(Math.random() * images.length);
    const randomIndex3 = Math.floor(Math.random() * images.length);

    // 画像要素とテキスト要素を取得し、ランダムな画像とテキストを設定
    const imgElement1 = document.getElementById('randomImage1');
    const titleElement1 = document.getElementById('randomTitles1');
    const detailElement1 = document.getElementById('randomDetails1');
    const linkElement1 = document.getElementById('randomLink1');
    imgElement1.src = images[randomIndex1];
    titleElement1.textContent = Titles[randomIndex1];
    detailElement1.textContent = Details[randomIndex1];
    linkElement1.href = Links[randomIndex1];

    const imgElement2 = document.getElementById('randomImage2');
    const titleElement2 = document.getElementById('randomTitles2');
    const detailElement2 = document.getElementById('randomDetails2');
    const linkElement2 = document.getElementById('randomLink2');
    imgElement2.src = images[randomIndex2];
    titleElement2.textContent = Titles[randomIndex2];
    detailElement2.textContent = Details[randomIndex2];
    linkElement2.href = Links[randomIndex2];

    const imgElement3 = document.getElementById('randomImage3');
    const titleElement3 = document.getElementById('randomTitles3');
    const detailElement3 = document.getElementById('randomDetails3');
    const linkElement3 = document.getElementById('randomLink3');
    imgElement3.src = images[randomIndex3];
    titleElement3.textContent = Titles[randomIndex3];
    detailElement3.textContent = Details[randomIndex3];
    linkElement3.href = Links[randomIndex3];
};