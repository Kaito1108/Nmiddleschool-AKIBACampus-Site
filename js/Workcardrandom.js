window.onload = function() {
    // 作品の画像
    const images = [
        'https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/AllWork/image/Angeltyan.png',
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/AnimalHotSpringirast.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/GandomBall.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/hotroom.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/JumpGandom.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/Konan.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/redboxvspurplebox.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/Reimu.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/skytower.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/SummerPokemon.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/taxcalculatorapp.png",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site//AllWork/image/tyadesu.png"
    ];

    // 作品のタイトル
    const Titles = [
        "オリキャラてんしちゃん",
        "温泉",
        "ボール",
        "暖色部屋",
        "ゼルダの盾 & 飛ぶガンダム",
        "コナンイラスト",
        "赤箱vs紫箱",
        "霊夢",
        "Skytower",
        "夏",
        "税金計算アプリ",
        "チャデス"
    ];

    // 作品の説明

    const Details = [
        "ChromeCanvasというサイトで絵を描きました",
        "動物たちが温泉に入っている絵を描きました。",
        "機動戦士ガンダムに登場するボールという機体をBlenderで再現してみました。",
        "机と椅子",
        "ゼルダの盾に傷がついている写真、Blenderで作ったガンダムが空を飛んでいる動画",
        "模写絵",
        "球をぶっ放すして赤箱を破壊するゲーム",
        "自分の好きなキャラクターを描きました。",
        "テレビゲーム「星のカービィ Wii」の曲「スカイタワー」のピアノ",
        "ポケモンたちをblenderで作りました",
        "消費税、所得税（製作中）、法人税（製作中）を計算できるアプリを製作している。",
        "ポケモン作りました、"
    ];

    const Links = [
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/Angeltyan/angeltyan.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/AnimalHotSpringirast/animalhotspringirast",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/GandomBall/gandomball.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/Hotroom/hotroom.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/JumpGandom/jumpgandom.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/Konanirast/konanirast.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/redboxvspurplebox/RedBoxvsPurpleBox.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/Reimu/reimu.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/Skytower/skytower.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/SummerPokemon/summerpokemon.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/TaxCalculatorApp/TaxCalculatorApp.html",
        "https://kojake.github.io/Nmiddleschool-AKIBACampus-Site/Work/tyadesu/tyadesu.html"
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