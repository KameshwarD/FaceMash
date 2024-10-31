const participants = [
  {
    name: "Scarlett Johansson",
    image:
      "https://imgs.search.brave.com/fBC898AHCTTXbUESCg4lrqy-oCiQ8fObKKyZTy4TjNE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RiL1NjYXJsZXR0/X0pvaGFuc3Nvbl8y/MDAzLmpwZw",
    votes: 0,
  },
  {
    name: "Alexandra Daddario",
    image:
      "https://imgs.search.brave.com/vFBPGTM0suC-yqrN5YHMD9TMfEs1a-YdGqMKcLwMTOk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UWTNOemcy/TmpBMU9GNUJNbDVC/YW5CblhrRnRaVGd3/TWpZNU5UVTFNeklA/LmpwZw",
    votes: 0,
  },
  {
    name: "Margot Robbie",
    image:
      "https://imgs.search.brave.com/aMIxLab4i94CSuCqs37x_hqYwwOPA8WCX9utCK5D2os/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMxLzJk/LzFiLzMxMmQxYmJh/NTZjNGJkMWNlODc2/MmRlNmE2NjAwZjJi/LmpwZw",
    votes: 0,
  },
  {
    name: "Emma Stone",
    image:
      "https://imgs.search.brave.com/4OJ5qTR8nRCD_rDUJNLWFkx4Vjr7gFpelTlpIj4Nvuk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUwL2Q2/LzNiLzUwZDYzYjE1/MWNlZWVlZGM2M2Y1/NTA2NjQwYWMxY2Rk/LmpwZw",
    votes: 0,
  },
  {
    name: "Jennifer Lawrence",
    image:
      "https://imgs.search.brave.com/pchlQgeYmv-ryMwhdvEtarBo4Pqyale_ON7afGUBc5o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9UVTNOREU1/TURRNE1WNUJNbDVC/YW5CblhrRnRaVGd3/TXpFNU9EUTNNRElA/LmpwZw",
    votes: 0,
  },
  {
    name: "Gal Gadot",
    image:
      "https://imgs.search.brave.com/cy_W1n39jay7z7YMiTAkrbDjGLxwtA8kp6MN6k63lWw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5XSm1ORE5p/TXpndE9HTmxPQzAw/TW1VNExUaGtOalV0/TlRJeE5tUXdNelE0/TlRjelhrRXlYa0Zx/Y0djQC5qcGc",
    votes: 0,
  },
  {
    name: "Natalie Portman",
    image:
      "https://imgs.search.brave.com/4E61f4aBV4t051IlUrcR-y2jZN5C90t5hk0sw1aU8mc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZhL05hdGFsaWVf/UG9ydG1hbl9Wb2d1/ZV8yMDI0LmpwZw",
    votes: 0,
  },
  {
    name: "Chaelize Theron",
    image:
      "https://imgs.search.brave.com/UGNRk4XhHqoIQkovkQL8G87gWxSQblxUjDB85rRaUUM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MzY5NTgxNi9waG90/by9wYXJpcy1mcmFu/Y2UtY2hhcmxpemUt/dGhlcm9uLWF0dGVu/ZHMtdGhlLXByZWx1/ZGUtdG8tdGhlLXBh/cmlzLWdhbWVzLTIw/MjQtb24tanVseS0y/NS0yMDI0LWluLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0x/dW9mWTRfVzk2SnV1/akU3eEw3dVBSN3hE/dk40WF9vbEtTTXNR/TlN5SG5BPQ",
    votes: 0,
  },
  {
    name: "Angelina Jolie",
    image:
      "https://imgs.search.brave.com/gI0UZaVFvB7uHF5wPHYyno_JiiCtIAHl-wn8cPZNAPs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy83OWIyOWIw/MjA2YWUyZTNkMTU0/OGZiZTc0ZDAzMDE2/Y2M1MWEzMWFlZTEz/YjZjZTBlNWZkNmEy/OGFkYWRlNGE4Lmpw/Zw",
    votes: 0,
  },
  {
    name: "Anne Hathaway",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwcZebmdQ28ZMLAfmKrN8BfmtnnAQBJp2e7KYWgsNXZ_X3w7Ef",
    votes: 0,
  },
  {
    name: "Sandra Bullock",
    image:
      "https://imgs.search.brave.com/oZiNrn66qGDJXvTXml9t4y92BJJ8A-JH-IhCCUibSdM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/bW1QNklxVDB6RXlO/UVoyMkh0RjN4ZFVj/dXJBPS80MDAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNzQ1/eDA6NzQ3eDIpL3Nh/bmRyYS1idWxsb2Nr/LWI2NjIyOWM5NWYx/MDRlODBiNjgxZjEy/ZTU1NzA4YjM2Lmpw/Zw",
    votes: 0,
  },
  {
    name: "Kate Winslet",
    image:
      "https://imgs.search.brave.com/tMPDngxRjPMW4SCiiT87WhS17oaZYRhbajRgPmoc0ek/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgx/ODE3MzA5L3Bob3Rv/L2JyaXRpc2gtYWN0/cmVzcy1rYXRlLXdp/bnNsZXQtbG9uZG9u/LTE5OTIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPV9Nc3Nj/WUxWYVFhRUhhZXp4/dnZsRnhKWlk4QWpR/UFdqaDJYZk5XNks2/X0U9",
    votes: 0,
  },
  {
    name: "Reese Witherspoon",
    image:
      "https://imgs.search.brave.com/HBOHYxeCIlCE249-M-r9iXqPka5gOPfux4yLOZSg5ks/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEWTBNek01/TVRrdFl6RXpOQzAw/TVdJMExUZ3laVFV0/WkRZMk5HRmpORGcz/T0dSalhrRXlYa0Zx/Y0djQC5qcGc",
    votes: 0,
  },
  {
    name: "Emma Watson",
    image:
      "https://imgs.search.brave.com/yZjsL5n2Lg2-BPMLr4zAW9tG-yiekjE0SMtjeISZsKo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy02MTk1/NDY5MTQuanBnP3Jl/c2l6ZT05ODA6Kg",
    votes: 0,
  },
  {
    name: "Jessica Alba",
    image:
      "https://imgs.search.brave.com/sEpSE2RAvvlj9XXlJkEjnbL3WuRX4R6-KG8-UefNP9c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/NzFiNGE3YzM2MmE2/LWplc3NpY2EtYWxi/YS1iaWtpbmktYmVh/Y2gtdC5qcGc",
    votes: 0,
  },
  {
    name: "Halle Berry",
    image:
      "https://imgs.search.brave.com/VQI6LhZb2zR4E2HHonY4Y5i8yVQRnfNecsHyBnBFnwc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NDMzMTI4NC9waG90/by9uZXcteW9yay1u/ZXcteW9yay1oYWxs/ZS1iZXJyeS1hdHRl/bmRzLWhhbGxlLWJl/cnJ5LWluLWNvbnZl/cnNhdGlvbi1icnVp/c2VkLWF0LTkyeS1v/bi1ub3ZlbWJlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/V0xMS3RuNlQxVDZT/NkNIeDZZZURCakVH/cDNuVTVlbWZoendr/bEZTQ3p1bz0",
    votes: 0,
  },
  {
    name: "Emily Blunt",
    image:
      "https://imgs.search.brave.com/QK-vBPDpWxwoJdVKeAyX4TCmnkziEkb8jbhzyIWzxE8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQy/MzQ3NjAyL3Bob3Rv/L2xvbmRvbi1lbmds/YW5kLWFjdG9yLWVt/aWx5LWJsdW50LWF0/dGVuZHMtYS1xdWll/dC1wbGFjZS1zY3Jl/ZW5pbmctYXQtdGhl/LWN1cnpvbi1zb2hv/LW9uLWFwcmlsLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXpHU1JoN0V2c01a/SjMxV1VjSTNQZlFU/ZHlPQTFnN3ZmZFhF/bV9UUHJ2VTA9",
    votes: 0,
  },
  {
    name: "Jennifer Aniston",
    image:
      "https://imgs.search.brave.com/GUmoEUi-tf4e74wBJZNDhAeEr2TlGAl7JweSQl5czGE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NDI3MTk4L3Bob3Rv/L2plbm5pZmVyLWFu/aXN0b24tYXMtcmFj/aGVsLWdyZWVuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Z/SjNFS2pVTng4clJQ/RjRTZ1Jqb3lGSUkt/LUlGdXh5clRHZHdk/dUdmQ3c0PQ",
    votes: 0,
  },
  {
    name: "Mila Kunis",
    image:
      "https://imgs.search.brave.com/nVuTH0qIh5qtgQelmWH7mpWHiXK9BKgMZ8X65d4ZINA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM1/NzU1ODIyL3Bob3Rv/L21pbGEta3VuaXMt/YXR0ZW5kcy10aGUt/Y2hyaXN0aWFuLWRp/b3ItcmVhZHktdG8t/ZmFsbC13aW50ZXIt/MjAxMi0yMDEzLXNo/b3ctYXQtbXVzZWUt/cm9kaW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTN3ckFY/OGJyekkzSXlveVN3/THowQ0tfNWV5Y3Ew/OW5QOXVIX25TdThY/QlU9",
    votes: 0,
  },
  {
    name: "Keira Knightley",
    image:
      "https://imgs.search.brave.com/beK54DMl1dhLY_GDuwuk8bTrTRS1DgPmnvIlOK1dRWE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzMw/MF9hbmRfaDQ1MF9i/ZXN0djIvYlJDMUIy/VndWMHdLM0VsY2lG/QUs2UVpmMndELmpw/Zw",
    votes: 0,
  },
  {
    name: "Cate Blanchett",
    image:
      "https://imgs.search.brave.com/aA0NPypP46UiNuLpS7N_m_qYogcJXCpOak47TV2XXqA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzMw/MF9hbmRfaDQ1MF9i/ZXN0djIvdlV1RUhp/QVIwZUQzWEVKaGcy/RFdJanltVUFBLmpw/Zw",
    votes: 0,
  },
  {
    name: "Nicole Kidman",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@.V1.jpg",
    votes: 0,
  },
  {
    name: "Zoe Saldana",
    image:
      "https://imgs.search.brave.com/VPs-I9kb8PA5KsP-JY9cIpeUk3hqaljOpNrgSJMYhNI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/MzZjODgyZWZhYzMx/LXpvZS1zYWxkYW5h/LWhhaXIuanBn",
    votes: 0,
  },
  {
    name: "Rachel McAdams",
    image:
      "https://imgs.search.brave.com/mI_VhNgd2Fs6kxfJGUmSR7RV3pBhLAqFK0dk_KPPZiE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ldy5j/b20vdGhtYi83ZzR0/YkQ2UklMUEpEUjR1/ZDZlX05qNWNxRlE9/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9n/ZXR0eWltYWdlcy00/Nzc0OTA0NjAtMjAw/MC04MTM3YjQ0MjAx/ZjU0NzExOTFkMTYz/ZGFmZmVjZjNlNC5q/cGc",
    votes: 0,
  },
  {
    name: "Kristen Bell",
    image:
      "https://imgs.search.brave.com/EPgFFK-V1iQi-cM-7G1XCFWORn369ik0tzQwo27YG8A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/L2FwMjQyNjI4MTIw/Njc1NTYuanBnP2M9/MTZ4OSZxPWhfODMz/LHdfMTQ4MCxjX2Zp/bGw",
    votes: 0,
  },
  {
    name: "Amanda Seyfried",
    image:
      "https://imgs.search.brave.com/UxligILjmDcB2m2G0xP9F6rnKeths8-hhNcaQPBCmB0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nb2xk/ZW5nbG9iZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL2FtYW5kYS1z/ZXlmcmllZC0wMi1z/Y2FsZWQuanBnP3c9/NjAw",
    votes: 0,
  },
  {
    name: "Shailene Woodley",
    image:
      "https://celebmafia.com/wp-content/uploads/2017/11/shailene-woodley-hollywood-film-awards-2017-in-los-angeles-15.jpg",
    votes: 0,
  },
  {
    name: "Jessica Chastain",
    image:
      "https://imgs.search.brave.com/mdmEFVxciuiTgUgq-ByX8VPWQlcvkhMuJBMvRRtt5Rc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlkyRXhaVGd4/WWpBdE1EWXdOQzAw/WXprMExUbGxORGN0/T0dZNVl6ZzJNV0kx/TURjd1hrRXlYa0Zx/Y0djQC5qcGc",
    votes: 0,
  },
  {
    name: "Dakota Fanning",
    image:
      "https://imgs.search.brave.com/yo0lOGKxmD505dhfocpIirY64inrxAVRwFgOAOl8qxY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83LzczL0Rh/a290YV9GYW5uaW5n/X1NBR19BV0FSRFNf/MjAyMC5qcGcvNTEy/cHgtRGFrb3RhX0Zh/bm5pbmdfU0FHX0FX/QVJEU18yMDIwLmpw/Zw",
    votes: 0,
  },
  {
    name: "Saoirse Ronan",
    image:
      "https://imgs.search.brave.com/FzUFfJl2Y4JSx0QhdPSNfnZ5Qk41CWtNJs-aLQpVIKY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL01hcnlfUXVl/ZW5fb2ZfU2NvdHNf/cHJlbWllcmVfKDMx/ODI1MjYxNzY3KV8o/Y3JvcHBlZCkuanBn",
    votes: 0,
  },
  {
    name: "Julia Roberts",
    image:
      "https://imgs.search.brave.com/l1CQK2dUrjOPdD2ctDKGo2-6xnOq8OIsUUkmkiSfjJU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9nZXR0/eWltYWdlcy0xMTkx/NDk1OTE1LmpwZz9j/cm9wPTF4dzoxLjB4/aDtjZW50ZXIsdG9w/JnJlc2l6ZT02NDA6/Kg",
    votes: 0,
  },
  {
    name: "Meryl Streep",
    image:
      "https://imgs.search.brave.com/6WeOlh5QhKGGqCVyGi6pNshyuaL6Bsi9_rSEfa33b_4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjYz/NjY4MC9kZS9mb3Rv/L3RoZS1hbWVyaWNh/bi1hY3RyZXNzLW1l/cnlsLXN0cmVlcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Q2g0clMxeG9kamlm/MURvWWJJUkd4dTh0/c3VWdG93aWZIYUQ1/ajBzTldzWT0",
    votes: 0,
  },
  {
    name: "Cameron Diaz",
    image:
      "https://imgs.search.brave.com/LmB8K_7UAVNEihkACBIcUsUAhWYii-nZtd5nCTJMA7w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTIyMzUxOS9waG90/by9hbWVyaWNhbi1h/Y3RyZXNzLWNhbWVy/b24tZGlhei5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dTY1/TUJEYmZsQXJ2aWFB/S09yMy00aVBYZGRP/S0k3Ry1qUW91VDhz/cVpsTT0",
    votes: 0,
  },
  {
    name: "Drew Barrymore",
    image:
      "https://cdn.britannica.com/14/251614-050-43FB3236/drew-barrymore-the-charlize-theron-africa-outreach-project-the-africa-center-new-york-city-november-12-2019.jpg",
    votes: 0,
  },
  {
    name: "Salma Hayek",
    image:
      "https://hollywoodlife.com/wp-content/uploads/2024/01/salma-hayek-vertical.jpg?resize=300%2C400",
    votes: 0,
  },
  {
    name: "Penélope Cruz",
    image:
      "https://imgs.search.brave.com/O9IGRxRznzy7GpTAm-ffTBWrXz6JELv0JGlqy0TBUEo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1ByZW1pb3Nf/R295YV8yMDE4Xy1f/UGVuJUMzJUE5bG9w/ZV9DcnV6LmpwZw",
    votes: 0,
  },
  {
    name: "Lupita Nyongo",
    image:
      "https://imgs.search.brave.com/7uB8iozpqLfKcJtliWYHde1elnvV1ktVFMiIk7XfoBk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL0x1cGl0YV9O/eW9uZydvX2J5X0dh/Z2VfU2tpZG1vcmVf/NC5qcGc",
    votes: 0,
  },
  {
    name: "Kristen Stewart",
    image:
      "https://imgs.search.brave.com/l9mw3YbdZlvv5RVZDWzSJbUYM132oD7du2nn6csDzrw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzQw/LzgwLzczNDA4MDFm/NjA2NDdhZGMwOTkw/Y2NkNzRmNzVhYmYz/LmpwZw",
    votes: 0,
  },
  {
    name: "Blake Lively",
    image:
      "https://imgs.search.brave.com/FjmF74PEcULnuIc0UzEAw1VRzo9iB0bohpMvQ89XqXs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbGx1cmUuY29t/L3Bob3Rvcy82M2Qz/ZTdlZWRjMzZiYjc5/ZTNhZDVhNGIvMTox/L3dfMzU0LGNfbGlt/aXQvYmxha2UlMjBs/aXZlbHklMjBicnVu/ZXR0ZSUyMGhhaXIu/anBn",
    votes: 0,
  },
  {
    name: "Gwyneth Paltrow",
    image:
      "https://imgs.search.brave.com/T1jL1IIeyjdY2yKg8Z6UXTnLeijsyLV6c_qoMUHoy3M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/YWYwYTJlYTcxZWQ4/LWd3eW5ldGgtcGFs/dHJvdy5qcGc",
    votes: 0,
  },
  {
    name: "Michelle Williams",
    image:
      "https://imgs.search.brave.com/T4MXCOfqCC6mrckM1WIbeRR304T6-9KNtEhF8Cn7kz8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/NjQzNzM4Mi9waG90/by9sb3MtYW5nZWxl/cy1jYWxpZm9ybmlh/LW1pY2hlbGxlLXdp/bGxpYW1zLWF0dGVu/ZHMtdGhlLTcxc3Qt/ZW1teS1hd2FyZHMt/YXQtbWljcm9zb2Z0/LXRoZWF0ZXItb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXlnMW1KUnZwdUxW/ejh1VG1iVk5LUml4/aWh3clBJbVJqUm5a/dGVXSmlpMzQ9",
    votes: 0,
  },
  {
    name: "Emily Ratajkowski",
    image:
      "https://imgs.search.brave.com/AhEgrvN8Q5gjJP32QXUZw1m8o1YRFPcZZqxPlGVYRxc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqbGlZekl3/TnpndFlUTTNPUzAw/WWpCa0xUZ3pZell0/WlRBMk1UZGtOR013/TlRkbFhrRXlYa0Zx/Y0djQC5qcGc",
    votes: 0,
  },
  {
    name: "Amber Heard",
    image:
      "https://imgs.search.brave.com/gEmALcAkabkRNSgd_b0KVUY-lGjPTx_42GhkngIHLQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1qQTRORGt5/T0RBM00xNUJNbDVC/YW5CblhrRnRaVGd3/TXpVek1qWXpOek1A/LmpwZw",
    votes: 0,
  },
  {
    name: "Brie Larson",
    image:
      "https://imgs.search.brave.com/TRVwMereHEPFX8tuN2kmpfy0Z1dXOulVPhErWqtq1Ag/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY0L0JyaWVfTGFy/c29uXyhjcm9wcGVk/KS5qcGc",
    votes: 0,
  },
  {
    name: "Naomi Scott",
    image:
      "https://imgs.search.brave.com/efoQJQ4K4VFWpL7daxV-bJM8CT-a3tVmCd7RiXDJ7YI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E1L05hb21pX1Nj/b3R0LmpwZw",
    votes: 0,
  },
  {
    name: "Amy Adams",
    image:
      "https://imgs.search.brave.com/jlFE0bK1eiWlWDQZrC1-R9z_XveD2o3EkhsvDc5lDhA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9hbXkt/YWRhbXMtMjA4ODMy/MjMtMS00MDIuanBn/P2Nyb3A9MXh3OjEu/MHhoO2NlbnRlcix0/b3AmcmVzaXplPTY0/MDoq",
    votes: 0,
  },
  {
    name: "Elisabeth Moss",
    image:
      "https://imgs.search.brave.com/tGQxfvYzgRW5CRXaDfOe-Do8BVqPt3YSpz335OXWGwA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9lbGlz/YWJldGgtbW9zcy1h/cnJpdmVzLWF0LXRo/ZS0yNHRoLWFubnVh/bC1zY3JlZW4tYWN0/b3JzLWd1aWxkLWF3/YXJkcy1hdC10aGUt/c2hyaW5lLWF1ZGl0/b3JpdW0tb24tamFu/dWFyeS0yMS0yMDE4/LWluLWxvcy1hbmdl/bGVzLWNhbGlmb3Ju/aWEtcGhvdG8tYnkt/c3RldmUtZ3Jhbml0/el93aXJlaW1hZ2Ut/c3F1YXJlLmpwZz9j/cm9wPTF4dzoxLjB4/aDtjZW50ZXIsdG9w/JnJlc2l6ZT02NDA6/Kg",
    votes: 0,
  },
  {
    name: "Lily Collins",
    image:
      "https://imgs.search.brave.com/_75vWPavKNWjjVcxO_gbVYm27wEUC-KINWUWZw3p--c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUSmpaR1Zs/TldFdE5URmlPUzAw/TUdNM0xXRmpNVGt0/WkdNMVpERmpZall3/TjJJM1hrRXlYa0Zx/Y0djQC5qcGc",
    votes: 0,
  },
  {
    name: "Winona Ryder",
    image:
      "https://imgs.search.brave.com/nOzwlZ0eLgXrKgHIk16WxTogzF8D9s5iIOdzfAKAbg8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ob2xs/eXdvb2RsaWZlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMy9XaW5vbmEt/SGVhdGhlcnMtVGhl/bi1BbmQtTm93LWVt/YmVkLmpwZz9yZXNp/emU9NjIwLDkyNA",
    votes: 0,
  },
  {
    name: "Julianne Hough",
    image:
      "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F1%2Fpeople%2F1cce13dd16586b3fe7d9f0ca59d60a22.jpg",
    votes: 0,
  },
];

let currentPair = [];
let currentPairIndex = 0;

function renderComparison() {
  const container = document.querySelector(".comparison-container");
  container.innerHTML = "";
  currentPair = getRandomPair();

  currentPair.forEach((participant) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${participant.image}" alt="${participant.name}">
            <h3>${participant.name}</h3>
        `;
    card.onclick = () => vote(participant);
    container.appendChild(card);
  });
}

function getRandomPair() {
  const shuffled = participants.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

function vote(selectedParticipant) {
  selectedParticipant.votes += 1;
  localStorage.setItem(selectedParticipant.name, selectedParticipant.votes);
  updateVoteSummary();
  renderComparison();
}

function updateVoteSummary() {
  const summary = document.getElementById("vote-summary");
  summary.innerHTML = "";

  // Sort participants by votes in descending order
  const sortedParticipants = participants.slice().sort((a, b) => {
    return (
      b.votes +
      parseInt(localStorage.getItem(b.name) || 0) -
      (a.votes + parseInt(localStorage.getItem(a.name) || 0))
    );
  });

  sortedParticipants.forEach((participant) => {
    const li = document.createElement("li");
    li.textContent = `${participant.name}: ${
      localStorage.getItem(participant.name) || 0
    } votes`;
    summary.appendChild(li);
  });
}

renderComparison();
updateVoteSummary();
