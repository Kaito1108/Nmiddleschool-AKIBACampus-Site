// すでにonloadイベントがある場合は、新しい関数を追加する方法
window.addEventListener('load', function() {
    // 作品の画像
    const images = [
        'https://www.akibacampus.com//AllWork/image/Angeltyan.png',
        "https://www.akibacampus.com///AllWork/image/AnimalHotSpringirast.png",
        "https://www.akibacampus.com///AllWork/image/GandomBall.png",
        "https://www.akibacampus.com///AllWork/image/hotroom.png",
        "https://www.akibacampus.com///AllWork/image/redboxvspurplebox.png",
        "https://www.akibacampus.com///AllWork/image/skytower.png",
        "https://www.akibacampus.com///AllWork/image/taxcalculatorapp.png",
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
        "https://www.akibacampus.com//Work/Angeltyan/angeltyan.html",
        "https://www.akibacampus.com//Work/AnimalHotSpringirast/animalhotspringirast",
        "https://www.akibacampus.com//Work/GandomBall/gandomball.html",
        "https://www.akibacampus.com//Work/Hotroom/hotroom.html",
        "https://www.akibacampus.com//Work/redboxvspurplebox/RedBoxvsPurpleBox.html",
        "https://www.akibacampus.com//Work/Skytower/skytower.html",
        "https://www.akibacampus.com//Work/TaxCalculatorApp/TaxCalculatorApp.html",
    ];

    // 重複を避けるためのユニークなランダム選択関数
    function getUniqueRandomIndexes(length, count) {
        const indexes = new Set();
        while(indexes.size < count) {
            const randomIndex = Math.floor(Math.random() * length);
            indexes.add(randomIndex);
        }
        return Array.from(indexes);
    }

    // ランダムなインデックスを生成
    const randomIndexes = getUniqueRandomIndexes(images.length, 3);

    // 各要素にランダムな画像とテキストを設定
    const elementIds = [
        { img: 'randomImage1', title: 'randomTitles1', detail: 'randomDetails1', link: 'randomLink1' },
        { img: 'randomImage2', title: 'randomTitles2', detail: 'randomDetails2', link: 'randomLink2' },
        { img: 'randomImage3', title: 'randomTitles3', detail: 'randomDetails3', link: 'randomLink3' }
    ];

    randomIndexes.forEach((randomIndex, index) => {
        const imgElement = document.getElementById(elementIds[index].img);
        const titleElement = document.getElementById(elementIds[index].title);
        const detailElement = document.getElementById(elementIds[index].detail);
        const linkElement = document.getElementById(elementIds[index].link);

        if (imgElement && titleElement && detailElement && linkElement) {
            imgElement.src = images[randomIndex];
            titleElement.textContent = Titles[randomIndex];
            detailElement.textContent = Details[randomIndex];
            linkElement.href = Links[randomIndex];
        }
    });
});