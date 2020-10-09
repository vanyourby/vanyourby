exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/YogaSakti/imageToSticker
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `
Hi kak ${pushname}! 👋️
jangan lupa follow ig aku ya
https://www.instagram.com/yusril.id_ dan juga kalau mau support botnya kamu bisa bantu aku dengan cara bedonasi.
ketik : *#donasi*
untuk melihat info donasi.


*NOTE : USE DELAY PLEASE, MENTANG MENTANG GRATIS JANGAN SEENAKNYA SPAM.*
==========================
            Commands
==========================
➥ *#rules*
Melihat rules bot yang harus kamu patuhi.

➥ *#botstat*
Melihat ststus bot

➥ *#sticker*
Kirim gambar dengan caption *#sticker* atau reply gambar yang sudah dikirim

➥ *#gifsticker*
mengubah gif menjadi sticker bergerak *(hanya bisa menggunakan link dari giphy)*
Contoh : *#gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

➥ *#lirik*
Request lirik lagu *(KALAU GAK MERESPON MUNGKIN LAGI ERROR)*
contoh : *#lirik aku bukan boneka*

➥ *#resi* = Untuk memeriksa status pengiriman barang, daftar kurir: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
contoh : *#resi pos 12345678910*

➥ *#neko*
Mengirim gambar kucing [ random ]

➥ *#pokemon*
Mengirim gambar pokemon [ random ]

➥ *#inu*
Mengirim gambar anjing [ random ]

➥ *#wallanime*
Mengirim gambar wallpaper anime [ random ]

➥ *#walldekstop*
Megirim gambar wallpaper dekstop [ random ]

➥ *#wallhp*
Megirim gambar wallpaper hp [ random ]

➥ *#waifu*
Mengirim gambar karakter anime perempuan [ random ]

➥ *#qanime*
Menampilkan quotes dari suatu karakter anime [ random ]

➥ *#quote*
Menampilkan quotes dari orang ternama didunia [ random ]

➥ *#dadu*
Mengirim sticker dadu 1-6 [ random ]

➥ *#qrcode*
Menjadikan teks menjadi qrcode
Contoh : *#qrcode i love you*

➥ *#tts* 
[kode bhs en, jp, ar, id] [teks] Convert Text to voice
contoh: #tts jp ohayou

➥ *#wait*
[ What Anime Is This ], menanyakan judul anime. kirim gambar dengan caption *#wait* *(harus dari scene/screenshot anime bukan fan art ya su)*

➥ *#meme*
Untuk membuat meme dengan teks atas dan bawah
Penggunaan: kirim gambar dengan caption *#meme ini atas | ini bawah*, atau juga bisa dengan membalas gambar yang sudah ada.

➥ *#translate*
Untuk mengartikan pesan menjadi bahasa yang ditentukan.
Penggunaan: Balas/quote/reply pesan yang ingin kamu translate dengan *#translate id* <- id adalah kode bahasa. kode bahasa dapat dilihat di *https://bit.ly/33FVldE*

➥ *#news*
Menampilkan berita terbaru hari ini.

➥ *#ceklokasi*
Cek lokasi penyebaran covid-19 di daerah sekitarmu (kelurahan).
Penggunaan: kirimkan lokasimu lalu balas/quote/reply lokasi yang kamu kirim dengan *#ceklokasi*
=========================
Downloader
=========================
➥ *#twt [link]*
Mengunduh video dari twitter via link
Contoh : *#twt https://youtu.be/blablabla*

➥ *#fb [link]*
Mengunduh Video dari facebook via link
Contoh : *#fb https://www.facebook.com.com/blablablabla*

➥ *#tiktok [link]*
Mengunduh video dari tiktok via link
Contoh : *#tiktok https://vt.tiktok.com/blablabla*

➥ *#joingrup*
Memasukkan bot ke grup yang kamu kelola.
========================
    Owner Group Only
========================
➥ *#kickAll*
Mengeluarkan semua member group!
*Note* : Admin group tidak terkena kick
========================
    Owner Bot Only
========================
➥ *#bc [teks]*
Broadcast
➥ *#leaveAll*
Keluar dari semua group!
➥ *#clearAll*
Menghapus semua chat
=========================
➥ *#donasi*
informasi untuk membantu kami membayar server bot agar tetap aktif.

grup wa : https://chat.whatsapp.com/CgAnPQOxapiAX9uYwTo21y

Bot By: *Sansekai Bot*`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

➥ *#kick @tagmember*
Mengeluarkan member nakal yang ada di group mu
*Note* : Bot tidak bisa mengeluarkan admin/owner group!

➥ *#add [nomor]*
Menambahkan member di group mu
Contoh : *#add 62858xxxx*

➥ *#demote @tagadmin*
Menurunkan pangkat admin menjadi member

➥ *#promote @tagmember*
Menaikkan pangkat member menjadi admin

➥ *#bye*
Bot keluar dari group ini.(hanya admin grup yang bisa memakai perintah ini)

➥ *#tagall*
Mention semua member group termasuk admin

➥ *#del*
menghapus pesan bot (balas pesan bot dengan #del)

➥ *#kickAll*
Mengeluarkan semua member group!
*Note* : Admin group tidak terkena kick)`
}

exports.textDonasi = () => {
    return `
Hai Kak, Selamat datang di menu donasi

Support Bot Kami Agar Tetap Aktif Dan Tidak Mengalami Error Dengan Berdonasi ke:
Dana: 081283468899
OVO: 081283468899
GOPAY: 081283468899
PULSA TELKOMSEL: 081283468899

*Menerima donasi berapapun jumlahnya 🙏 Terima Kasih.*`
}

exports.textRules = () => {
    return `
    *RULES BAGI PENGGUNA BOT*
    
➥ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➥ Call/VC Bot Auto Block.
➥ Jangan Call/VC Bot Kalau Tidak aktif, Ganggu Bgt Gblk.

*Konsekuensi Bila Melanggar Rules*
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.

Rules ini untuk kenyamanan semua yang memakai
bot ini `
}
