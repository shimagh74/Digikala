let buyitems = []
var products = [
    {
        img: 'images/1.jpg',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA - A',
        price: '3245000 ',
        star: 5,
        nafar: 51,
        colors: ['gray'],
        seller: 'دیجی‌کالا',
        number: 5,
        id: 1
    }
    ,
    {
        img: 'images/2.jpg',
        name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - F',
        price: '13600000 ',
        star: 1,
        nafar: 25,
        colors: ['gray', 'black'],
        seller: 'کالاوما',
        number: 5,
        id: 2
    }
    ,
    {
        img: 'images/3.jpg',
        name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - FA',
        price: '1245000 ',
        star: 3,
        nafar: 87,
        colors: ['gray'],
        seller: ' کندل ایران',
        number: 5,
        id: 3

    }
    ,
    {
        img: 'images/4.jpg',
        name: 'لپ تاپ 15 اینچی دل مدل XPS 7590-A',
        price: '5600000 ',
        star: 4,
        nafar: 32,
        colors: ['gray'],
        seller: 'دیجی‌کالا',
        number: 5,
        id: 4
    }
    ,
    {
        img: 'images/5.jpg',
        name: 'لپ تاپ 14 اینچی آی لایف مدل Zed Air H2',
        price: '2245000 ',
        star: 3,
        nafar: 51,
        colors: ['gray', 'black'],
        seller: 'دیجی‌کالا',
        number: 5,
        id: 2,
        id: 5


    }
    ,
    {
        img: 'images/6.jpg',
        name: 'لپ تاپ 15 اینچی مایکروسافت مدل Surface Book 2- C',
        price: '1200000 ',
        star: 2,
        nafar: 49,
        colors: ['gray'],
        seller: 'دیجی‌کالا',
        number: 5,
        id: 6
    }
    ,
    {
        img: 'images/7.jpg',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook D540YA - A',
        price: '1145000 ',
        star: 4,
        nafar: 51,
        colors: ['gray'],
        seller: 'دیجی‌کالا',
        number: 5,
        id: 7

    }
    ,
    {
        img: 'images/8.jpg',
        name: 'لپ تاپ 13 اینچی ایسوس مدل ZenBook S13 UX392FN - A',
        price: '5352000 ',
        star: 3,
        nafar: 41,
        colors: ['gray'],
        seller: 'کالاوما',
        number: 5,
        id: 8


    }
    ,
    {
        img: 'images/9.jpg',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook X540YA - C',
        price: '3245000',
        star: 5,
        nafar: 51,
        colors: ['black', 'gray'],
        seller: 'کسری کامپیوتر',
        number: 5,
        id: 9

    }
    ,
    {
        img: 'images/10.jpg',
        name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad L340 - B',
        price: '1095000 ',
        star: 4,
        nafar: 36,
        colors: ['black', 'gray'],
        seller: 'کسری کامپیوتر',
        number: 5,
        id: 10

    }
    ,
    {
        img: 'images/11.jpg',
        name: 'لپ تاپ 14 اینچی ایسوس مدل ZenBook UX433FA - EP',
        price: '1290000 ',
        star: 1,
        nafar: 39,
        colors: ['black', 'gray'],
        seller: 'کالاوما',
        number: 5,
        id: 11
    }
    ,
    {
        img: 'images/12.jpg',
        name: 'لپ تاپ 15 اینچی ایسوس مدل ROG Strix G531GW - ZX',
        price: '3100000 تومان',
        star: 4,
        nafar: 19,
        colors: ['black', 'gray'],
        seller: 'کالاوما',
        number: 5,
        id: 12

    }
];

function search() {
    var search = document.getElementsByClassName("search")[0].value;

    var producthtml = '';
    products.filter((product) => {
        if (product.name.includes(search))
            return true;

        return false;
    }).forEach((product, index) => {
        var starhtml = '';
        for (var i = 0; i < product.star; i++) {
            starhtml += '<span class="fa fa-star checked"></span>'
        }
        for (var i = 0; i < 5 - product.star; i++) {
            starhtml += '<span class="fa fa-star"></span>'
        }
        var colorshtml = '';
        product.colors.forEach((color) => {
            colorshtml +=
                `<li><div class="color" style="background-color:${color}"></div></li>`
            var sellershtml = '';
        })
        producthtml += `
			<div class="col-lg-3 stalycol col-md-6">
				<div class="card">
                 <ul class="color-list">${colorshtml}</ul>   
					<img src=${product.img} class="card-img-top" alt="">
					<div class="card-body">
						<h5 class="card-title">${product.name}</h5>
						<p class="rate">${starhtml} ${product.nafar} نفر</p>
						<p class="text-price"><b>${product.price}</b> تومان</p>
						<p class="seller"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#5F5F5F" fill-rule="nonzero" d="M20.89 7.14l1.09 5.447a1.095 1.095 0 0 1-1.068 1.308h-.196v5.447c0 .6-.49 1.09-1.09 1.09-.599 0-1.09-.49-1.09-1.09v-5.447H14.18v5.447c0 .6-.49 1.09-1.09 1.09H4.374c-.6 0-1.09-.49-1.09-1.09v-5.447h-.196a1.095 1.095 0 0 1-1.068-1.308L3.11 7.14a1.087 1.087 0 0 1 1.068-.872h15.644c.523 0 .97.37 1.068.872zM12 18.253v-4.358H5.463v4.358H12zM4.374 5.179c-.6 0-1.09-.49-1.09-1.09 0-.599.49-1.089 1.09-1.089h15.252c.6 0 1.09.49 1.09 1.09 0 .599-.49 1.089-1.09 1.089H4.374z"/>
</svg> فروشنده: <b>${product.seller}</b></p>
					<button class="btn-add-to-cart" onclick="buylist(${index})">افزودن به سبد خرید</button>
					</div>
				</div>
			</div>`
    });
    document.getElementById('products').innerHTML = producthtml;
}

function buylist(index) {
    buyitems.push(products[index])
    products[index].number = products[index].number - 1
    setStorage()
    console.log(products[index].number)
}

function setStorage() {
    localStorage.setItem('buyitems', JSON.stringify(buyitems))
}

search();
