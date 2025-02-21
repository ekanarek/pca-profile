// Genres: Fantasy, Horror, Literary Fiction, Science Fiction, Mystery, Romance, Thriller, Nonfiction, Historical Fiction

const BOOK_DATA = [
    {
        title: "Anna Karenina",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/5piz44hrn6li6fcb9twmdxkqaqq7"
    },
    {
        title: "Assassin's Apprentice",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/3petfsct6oyrx1idupbl31ypbyzd"
    },
    {
        title: "Black Sun",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/k19e9dazdi57gdszbwev5mskjq7d"
    },
    {
        title: "Blood Over Bright Haven",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/x07v4x12kv0bg36udkfz6xl5rrsu"
    },
    {
        title: "Cloud Cuckoo Land",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/0ywurur4t7wv5a1selca2dtm4sc5"
    },
    {
        title: "Comfort Me with Apples",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/9abxr5l1hm1sqwy5js5ed520obj7"
    },
    {
        title: "Convenience Store Woman",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/hxxbzaes8t6s7npe5f8l3acxovee"
    },
    {
        title: "Diavola",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/0f1ncgfbhxxuv119px7v5xr87v31"
    },
    {
        title: "Evenings and Weekends",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/n7e405bvoh052eed54m5vk7t2ykg"
    },
    {
        title: "Everything I Never Told You",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/8g7c8urgwvra70j9k7z0z1v7lbpm"
    },
    {
        title: "The Grapes of Wrath",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/oepc0mbpmb0kmbczikkdjadi2ctm"
    },
    {
        title: "I Capture the Castle",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/digogig12x4d4bsjmq7zc153rafs"
    },
    {
        title: "If Beale Street Could Talk",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/qmqrnqxiifaif17i1e4tacdegpd9"
    },
    {
        title: "If We Were Villains",
        genre: "Thriller",
        imgUrl: "https://cdn.thestorygraph.com/ekp09n1plputc0lkawuiql9qj0uh"
    },
    {
        title: "In the Dream House",
        genre: "Nonfiction",
        imgUrl: "https://cdn.thestorygraph.com/xpfjpum705zsyqlecnq1cjwz7660"
    },
    {
        title: "Interior Chinatown",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/poxiiv8zatjin20fy5eidodszyzi"
    },
    {
        title: "The Island of Missing Trees",
        genre: "Historical Fiction",
        imgUrl: "https://cdn.thestorygraph.com/qq4bzug5zk1v62lxf3slzvm13994"
    },
    {
        title: "Jade City",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/tiq4231zpdky543ykm3auam6rjnv"
    },
    {
        title: "The Justice of Kings",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/g3c9yfoibt317d13hzgz8irknyn2"
    },
    {
        title: "Kindred",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/alo7bc7twoo4nigca1wkg5s6wcnt"
    },
    {
        title: "Klara and the Sun",
        genre: "Science Fiction",
        imgUrl: "https://cdn.thestorygraph.com/jqvmkn0zasfdv9gpg8gp0zp1rykj"
    },
    {
        title: "The Last House on Needless Street",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/7eou2p225mk7zsq6swrrayekl6dy"
    },
    {
        title: "The Library at Mount Char",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/5k9schbplt6vemj2tavuf1ll9jaa"
    },
    {
        title: "A Little Life",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/v73ssy52da4ubbmp2wk1ropul03h"
    },
    {
        title: "A Little Luck",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/fgch3xyrqlkjpbr2ytrwoh9oe71n"
    },
    {
        title: "Little Rot",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/devmp8wvz6hhisoupjfgq9u8d4gc"
    },
    {
        title: "Miracle Creek",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/0ui2ra5d3hlvdoh1zujy5ew9wkjj"
    },
    {
        title: "Moon of the Crusted Snow",
        genre: "Thriller",
        imgUrl: "https://cdn.thestorygraph.com/f97rjfv5zr3zv4ojchifrnsqpsvr"
    },
    {
        title: "Ninth House",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/bjnz167fxa8omi71yu5by37c8763"
    },
    {
        title: "On Earth We're Briefly Gorgeous",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/1f8nwu8ukxw6ohdnvsawewuawz14"
    },
    {
        title: "Once There Were Wolves",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/f5lha05ec1awx3a21aodontlbp2k"
    },
    {
        title: "Piranesi",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/tz55yenrtmknvxuotg8dlcpdv75k"
    },
    {
        title: "The Poppy War",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/rl0xfj7mjbiqrz8v93eatemj222y"
    },
    {
        title: "The Push",
        genre: "Thriller",
        imgUrl: "https://cdn.thestorygraph.com/0pbf3ynttep58fmk3f8m9qi2ogjf"
    },
    {
        title: "The Queen of Blood",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/8a22xb0ibhuph5r28gfzdh4c1cwb"
    },
    {
        title: "Rebecca",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/ojmrtkvtk0f8j6flm9867y5aoa86"
    },
    {
        title: "Red, White & Royal Blue",
        genre: "Romance",
        imgUrl: "https://cdn.thestorygraph.com/zt2uksefzz57a1ciq68fswsz27ph"
    },
    {
        title: "The Reformatory",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/790gz6d4ywj2lo1ho12npjytakjg"
    },
    {
        title: "The Shadow of the Wind",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/bsen2ebh8e1uq79uv13g69d3gygs"
    },
    {
        title: "She Who Became the Sun",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/ijf9qgi1x16nx8ry6v7lh8l6jo6t"
    },
    {
        title: "The Stationery Shop",
        genre: "Historical Fiction",
        imgUrl: "https://cdn.thestorygraph.com/3hyd8hwil52b67qg10puxhqhzcor"
    },
    {
        title: "Tess of the D'Urbervilles",
        genre: "Classics",
        imgUrl: "https://cdn.thestorygraph.com/zcvoledlgqg52z8j9tl58fda1dki"
    },
    {
        title: "Trumpet",
        genre: "Literary Fiction",
        imgUrl: "https://cdn.thestorygraph.com/pjmst3q4jxbeeh67fm0vfopt0gbk"
    },
    {
        title: "Vampires of El Norte",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/6jrkp615zsthkehb3ll05odn0t1p"
    },
    {
        title: "The Way of Kings",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/wqqgxoy1l128z6t4cj8h5qcxd3nd"
    },
    {
        title: "We Used to Live Here",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/9u60a6au3fxx64sm5enmuqkr4tjl"
    },
    {
        title: "What My Bones Know",
        genre: "Nonfiction",
        imgUrl: "https://cdn.thestorygraph.com/ijc8ak2yomsxys4zr84d91oi7l4i"
    },
    {
        title: "The Will of the Many",
        genre: "Fantasy",
        imgUrl: "https://cdn.thestorygraph.com/lce9m7w4t3axfdpwt0c53u7j9b5m"
    },
    {
        title: "The Woman in the Library",
        genre: "Mystery",
        imgUrl: "https://cdn.thestorygraph.com/epcee853f0t3p4pz0i3rp6c9z2xs"
    },
    {
        title: "The Woods All Black",
        genre: "Horror",
        imgUrl: "https://cdn.thestorygraph.com/xfjl9t4f52ee4coh7rleok741vqy"
    },
]

export default BOOK_DATA