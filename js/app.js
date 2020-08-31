let app = new Vue({
    el: "#app",
    data: {
        languages: [
            ["English", "en"],
            ["Русский", "ru"],
            ["Հայերեն", "am"],
        ],
        language: "en",

        soc_sites: [
            [
                "facebook",
                "<a href='https://www.facebook.com/profile.php?id=100010697918944'><i class='fab fa-facebook fa-2x'></i></a>",
            ],
            [
                "instagram",
                "<a href='https://www.facebook.com/profile.php?id=100010697918944'><i class='fab fa-instagram fa-2x'></i></a>",
            ],
            [
                "facebook",
                "<a href='https://www.facebook.com/profile.php?id=100010697918944'><i class='fab fa-facebook fa-2x'></i></a>",
            ],
            [
                "facebook",
                "<a href='https://www.facebook.com/profile.php?id=100010697918944'><i class='fab fa-facebook fa-2x'></i></a>",
            ],
        ],

        themes: [
            ["triangle", "circle"], //en
            ["треугольник", "круг"], //ru
            ["եռանկյունի", "շրջանագիծ"], //am
        ],
        theme: "",

        triangleShapes: [
            ["rectangular", "equal sides 3", "equal sides 2"], //en
            ["прямоугольный", "равные стороны 3", "равные стороны 2"], //ru
            ["ուղղանկյուն", "հավասար կողմեր 3", "հավասար կողմեր 2"], //am
        ],
        triangle: [],
    },
    methods: {},
});

decideLanguage: {
    function decideLanguage() {
        let language = navigator.language;
        if (language == "ru" || language == "am") {
            app.language = language;
        }
    }
    decideLanguage();
}

wallet: {
    document.querySelector(".wallet_icon").addEventListener("click", function () {
        document.querySelector(".wallet_list").classList.toggle("wallet_list_active");
    });
    const wallets = ["yandex", "wme", "qiwi"];
    function copytext(id) {
        let yandex = document.querySelector(`.${wallets[id]}`);
        yandex.select();
        document.execCommand("copy");
    }
}

parallax: {
    let scene = document.querySelector("#scene");
    let parallaxInstance = new Parallax(scene, {
        relativeInput: true,
    });
}

mob_header: {
    const header = document.querySelector("header");
    const mob_header = document.querySelector(".mob_header");
    mob_header.addEventListener("click", () => {
        header.classList.toggle("mobile");
    });
}

notprodaction: {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
}
