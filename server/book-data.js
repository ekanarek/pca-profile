const BOOK_DATA = [
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/5piz44hrn6li6fcb9twmdxkqaqq7"
    },
    {
        title: "Assassin's Apprentice",
        author: "Robin Hobb",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/3petfsct6oyrx1idupbl31ypbyzd"
    },
    {
        title: "The Bear and the Nightingale",
        author: "Katherine Arden",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/l5nlx919g4ivficxvjsovh2wrhsk"
    },
    {
        title: "Black Sun",
        author: "Rebecca Roanhorse",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/k19e9dazdi57gdszbwev5mskjq7d"
    },
    {
        title: "Blood Over Bright Haven",
        author: "M.L. Wang",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/x07v4x12kv0bg36udkfz6xl5rrsu"
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        genre: "Historical Fiction",
        imgUrl: "https://cdn.thestorygraph.com/z9erb41j5bo0dxw6e9bjsgmljacm"
    },
    {
        title: "Circe",
        author: "Madeline Miller",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/1l2asbnjsdzzby3j7mgv947wdp4o"
    },
    {
        title: "Cloud Cuckoo Land",
        author: "Anthony Doerr",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/0ywurur4t7wv5a1selca2dtm4sc5"
    },
    {
        title: "Comfort Me with Apples",
        author: "Catherynne M. Valente",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/9abxr5l1hm1sqwy5js5ed520obj7"
    },
    {
        title: "Convenience Store Woman",
        author: "Sayaka Murata",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/hxxbzaes8t6s7npe5f8l3acxovee"
    },
    {
        title: "A Darker Shade of Magic",
        author: "V.E. Schwab",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/ah4sgajdpparrnf1cynuqywuavrr"
    },
    {
        title: "Devotions",
        author: "Mary Oliver",
        genre: "Nonfiction",
        imgUrl: "https://cdn.thestorygraph.com/2chfcpfsxvvizmptibpjs3dn6fp2"
    },
    {
        title: "Diavola",
        author: "Jennifer Thorne",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/0f1ncgfbhxxuv119px7v5xr87v31"
    },
    {
        title: "Evenings and Weekends",
        author: "Oisín McKenna",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/n7e405bvoh052eed54m5vk7t2ykg"
    },
    {
        title: "Everything I Never Told You",
        author: "Celeste Ng",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/8g7c8urgwvra70j9k7z0z1v7lbpm"
    },
    {
        title: "Foundryside",
        author: "Robert Jackson Bennet",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/i6d4r8m86cgzscbuumnzjw5tvmjv"
    },
    {
        title: "Giovanni's Room",
        author: "James Baldwin",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/zjxbawx2drlnlf7phbm8w0sh1oam"
    },
    {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/oepc0mbpmb0kmbczikkdjadi2ctm"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/7a11q7l9gv5wn76y902lrv07mebu"
    },
    {
        title: "I Capture the Castle",
        author: "Dodie Smith",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/digogig12x4d4bsjmq7zc153rafs"
    },
    {
        title: "If Beale Street Could Talk",
        author: "James Baldwin",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/qmqrnqxiifaif17i1e4tacdegpd9"
    },
    {
        title: "If We Were Villains",
        author: "M.L. Rio",
        genre: "Thriller",
        imgUrl: "https://cdn.thestorygraph.com/ekp09n1plputc0lkawuiql9qj0uh"
    },
    {
        title: "In the Dream House",
        author: "Carmen Maria Machado",
        genre: "Nonfiction",
        imgUrl: "https://cdn.thestorygraph.com/xpfjpum705zsyqlecnq1cjwz7660"
    },
    {
        title: "Interior Chinatown",
        author: "Charles Yu",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/poxiiv8zatjin20fy5eidodszyzi"
    },
    {
        title: "The Island of Missing Trees",
        author: "Elif Shafak",
        genre: "Historical Fiction",
        imgUrl: "https://cdn.thestorygraph.com/qq4bzug5zk1v62lxf3slzvm13994"
    },
    {
        title: "Jade City",
        author: "Fonda Lee",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/tiq4231zpdky543ykm3auam6rjnv"
    },
    {
        title: "Juniper & Thorn",
        author: "Ava Reid",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/7krdah16jacx46jgyapvc0xmnu5q"
    },
    {
        title: "The Justice of Kings",
        author: "Richard Swan",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/g3c9yfoibt317d13hzgz8irknyn2"
    },
    {
        title: "Kindred",
        author: "Octavia E. Butler",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/alo7bc7twoo4nigca1wkg5s6wcnt"
    },
    {
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/jqvmkn0zasfdv9gpg8gp0zp1rykj"
    },
    {
        title: "The Last House on Needless Street",
        author: "Catriona Ward",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/7eou2p225mk7zsq6swrrayekl6dy"
    },
    {
        title: "The Library at Mount Char",
        author: "Scott Hawkins",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/5k9schbplt6vemj2tavuf1ll9jaa"
    },
    {
        title: "A Little Life",
        author: "Hanya Yanagihara",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/v73ssy52da4ubbmp2wk1ropul03h"
    },
    {
        title: "A Little Luck",
        author: "Claudia Piñeiro",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/fgch3xyrqlkjpbr2ytrwoh9oe71n"
    },
    {
        title: "Little Rot",
        author: "Akwaeke Emezi",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/devmp8wvz6hhisoupjfgq9u8d4gc"
    },
    {
        title: "Mexican Gothic",
        author: "Silvia Moreno-Garcia",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/x9bi861q4mp24st8tj9bwblgknjh"
    },
    {
        title: "Miracle Creek",
        author: "Angie Kim",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/0ui2ra5d3hlvdoh1zujy5ew9wkjj"
    },
    {
        title: "Mistborn",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/uyanhiki92kh1h9gnaukbv19v59g"
    },
    {
        title: "Moon of the Crusted Snow",
        author: "Waubgeshig Rice",
        genre: "Thriller",
        imgUrl: "https://cdn.thestorygraph.com/f97rjfv5zr3zv4ojchifrnsqpsvr"
    },
    {
        title: "My Grandmother Asked Me to Tell You She's Sorry",
        author: "Fredrik Backman",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/u4g53w50744abr925i26b215yy7y"
    },
    {
        title: "Ninth House",
        author: "Leigh Bardugo",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/bjnz167fxa8omi71yu5by37c8763"
    },
    {
        title: "On Earth We're Briefly Gorgeous",
        author: "Ocean Vuong",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/1f8nwu8ukxw6ohdnvsawewuawz14"
    },
    {
        title: "Once There Were Wolves",
        author: "Charlotte McConaghy",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/f5lha05ec1awx3a21aodontlbp2k"
    },
    {
        title: "Piranesi",
        author: "Susanna Clarke",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/tz55yenrtmknvxuotg8dlcpdv75k"
    },
    {
        title: "The Poisonwood Bible",
        author: "Barbara Kingsolver",
        genre: "Historical Fiction",
        imgUrl: "https://cdn.thestorygraph.com/mwyaxzbdibkvj23wmqlalcowpzww"
    },
    {
        title: "The Poppy War",
        author: "R.F. Kuang",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/rl0xfj7mjbiqrz8v93eatemj222y"
    },
    {
        title: "The Power",
        author: "Naomi Alderman",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/lih8rwh4cz228gygg805eubi57k4"
    },
    {
        title: "The Push",
        author: "Ashley Audrain",
        genre: "Thriller",
        imgUrl: "https://cdn.thestorygraph.com/0pbf3ynttep58fmk3f8m9qi2ogjf"
    },
    {
        title: "The Queen of Blood",
        author: "Sarah Beth Durst",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/8a22xb0ibhuph5r28gfzdh4c1cwb"
    },
    {
        title: "Rebecca",
        author: "Daphne du Maurier",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/ojmrtkvtk0f8j6flm9867y5aoa86"
    },
    {
        title: "Red, White & Royal Blue",
        author: "Casey McQuiston",
        genre: "Romance",
        imgUrl: "https://cdn.thestorygraph.com/zt2uksefzz57a1ciq68fswsz27ph"
    },
    {
        title: "The Reformatory",
        author: "Tananarive Due",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/790gz6d4ywj2lo1ho12npjytakjg"
    },
    {
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/bsen2ebh8e1uq79uv13g69d3gygs"
    },
    {
        title: "She Who Became the Sun",
        author: "Shelley Parker-Chan",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/ijf9qgi1x16nx8ry6v7lh8l6jo6t"
    },
    {
        title: "Signal Fires",
        author: "Dani Shapiro",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/ojm7vgxc7u0r5nlhise5gphc0o7m"
    },
    {
        title: "Sisters of the Lost Nation",
        author: "Nick Medina",
        genre: "Thriller",
        imgUrl: "https://cdn.thestorygraph.com/e5hfbw2y8zsizjnw8gdtd9f2xxg7"
    },
    {
        title: "The Stationery Shop",
        author: "Marjan Kamali",
        genre: "Historical Fiction",
        imgUrl: "https://cdn.thestorygraph.com/3hyd8hwil52b67qg10puxhqhzcor"
    },
    {
        title: "Summer Sons",
        author: "Lee Mandelo",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/oeptley0ketm5x1x1c9b5rbns5xv"
    },
    {
        title: "Tess of the D'Urbervilles",
        author: "Thomas Hardy",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/zcvoledlgqg52z8j9tl58fda1dki"
    },
    {
        title: "Thistlefoot",
        author: "GennaRose Nethercott",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/id0q918dcpszoywoi08n8onrw5de"
    },
    {
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/40p778ti6wyb4q3370kcue3xv5cv"
    },
    {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/wayoh6706s8ne2jo2swn5rlhpfl9"
    },
    {
        title: "Trumpet",
        author: "Jackie Kay",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/pjmst3q4jxbeeh67fm0vfopt0gbk"
    },
    {
        title: "Vampires of El Norte",
        author: "Isabel Cañas",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/6jrkp615zsthkehb3ll05odn0t1p"
    },
    {
        title: "Vicious",
        author: "V.E. Schwab",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/n7pn5wu1cl4i4qc3l45x94u8gopn"
    },
    {
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/wqqgxoy1l128z6t4cj8h5qcxd3nd"
    },
    {
        title: "We Used to Live Here",
        author: "Marcus Kliewer",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/9u60a6au3fxx64sm5enmuqkr4tjl"
    },
    {
        title: "What My Bones Know",
        author: "Stephanie Foo",
        genre: "Nonfiction",
        imgUrl: "https://cdn.thestorygraph.com/ijc8ak2yomsxys4zr84d91oi7l4i"
    },
    {
        title: "When We Were Sisters",
        author: "Fatimah Asghar",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/i3afzyfvx9osddtfr95q37kwklg7"
    },
    {
        title: "The Will of the Many",
        author: "James Islington",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/lce9m7w4t3axfdpwt0c53u7j9b5m"
    },
    {
        title: "The Woman in the Library",
        author: "Sulari Gentill",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/epcee853f0t3p4pz0i3rp6c9z2xs"
    },
    {
        title: "The Woods All Black",
        author: "Lee Mandelo",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/xfjl9t4f52ee4coh7rleok741vqy"
    },
    {
        title: "Yumi and the Nightmare Painter",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/wrr1yvc2xaeh8fv91p8yl2gttuo8"
    },
]

export default BOOK_DATA