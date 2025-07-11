const foodItems = [
  {
    "id": 1,
    "name": "Chicken Dum Biryani (Mini)",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 130,
    "serve2": null,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMSnWYx2cc8stKna14CL4ZTIPwaoejHeNAakBH9kxnLSlZUkmJg9lmN9oGnNKv-MT05-e_b2U0OcqQ-8uqkQieITg=s680-w680-h510-rw"
  },
  {
    "id": 2,
    "name": "Chicken Dum Biryani (Regular)",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 190,
    "serve2": 290,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOWLXy8NWHC3XLUSrwAakESTdEP_qcrEm_-TjsOynq8BM4nBdiE64klClRZFhTH4UkNXWx-FvHHvCrMf8xriEpq4Q=s680-w680-h510-rw"
  },
  {
    "id": 3,
    "name": "Special Chicken Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 210,
    "serve2": 310,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMt4nYRydvPuShFdht9RtjAOP403-YNCUyRx7vpkdp9732fZ3pA5fjUKfU0JoYVbH2t3UZ8tJakK5p2cfnJ4qbLZA=s680-w680-h510-rw"
  },
  {
    "id": 4,
    "name": "Chicken Fry Piece Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 210,
    "serve2": 310,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNy7NpgpUgg8K524bJv2xa_cECthiE782YCDJYkehqTvNlvUzNbPGjBYdtY5neBXHjKw5S_Ti4xk1RKXakVIRHaEg=s680-w680-h510-rw"
  },
  {
    "id": 5,
    "name": "Chicken Lollipop Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 220,
    "serve2": 320,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMdSbItKe5BdH_SigFFeFG-DfBWqFEuXc8nsdhcqHmGPLEPCRR7h5ToD_aRJoNgU2h-F1YWUCXFNhg89yofjjIr5g=s680-w680-h510-rw"
  },
  {
    "id": 6,
    "name": "Chicken Kebab Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 210,
    "serve2": 310,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNAvjQbmvMEy1QQfsgWZ_2Fb0Q-EpxuTgP1NJ05kw3-iLvCpt80Cnu2QxCgnSWdvUulhlxEHg4d-KD_welxad4osw=s680-w680-h510-rw"
  },
  {
    "id": 7,
    "name": "Chicken 65 Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 210,
    "serve2": 310,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPJee-mDrqy-BCll2h9tfGiJScHw33FoT2XICnLmYxZkvpD5HYVpthzMlbFood2UYAosfrj9FNO4REh_tHWTXzWsg=s680-w680-h510-rw"
  },
  {
    "id": 8,
    "name": "Guntur Chicken Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 210,
    "serve2": 310,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNMUPkHxHjrlHomBnkzmJ5Dw-FcNVDdad7mpNhNLR47QSDeDJ-SOshtzF4y8cnIo1uHHeALw0s8plXQ4maQ9V5oVQ=s680-w680-h510-rw"
  },
  {
    "id": 9,
    "name": "Gongura Chicken Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 210,
    "serve2": 310,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMxxpinsoJsGnr0zso42O0wWLMuSddINptkjwL3ma1F6xDNFug239QRar2pGRAf2ssSMRDNuXmFVcI90O-CXKRebw=s680-w680-h510-rw"
  },
  {
    "id": 10,
    "name": "Egg Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 130,
    "serve2": 230,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNOTw1SQRR88fYgwj15nSWHN9iwRgpejW4ZMcet2K5q_ZysSORLw-x5cNZUWfWg3twGuDxTDTr1UV1lufc_oujuzA=s680-w680-h510-rw"
  },
  {
    "id": 11,
    "name": "Paneer Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 180,
    "serve2": 280,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOG_q5BPxLhxRUJcpZvGYD-pVsnIOf8fqb9eaW08YNmzfJuFm6r5IRX5KYUhLIaryTGI-lP6Onfrs3sZDn4l5AkgA=s680-w680-h510-rw"
  },
  {
    "id": 12,
    "name": "Babycorn Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 170,
    "serve2": 270,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMH8sBlFMgni3XVNpfmMo-gR73Al8rqJX4zcwVSFAhZrboOsL0sUmi6D5Z8hmBRacDWR-e5WdLUFYd1SoItYkwqRg=s680-w680-h510-rw"
  },
  {
    "id": 13,
    "name": "Mushroom Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 170,
    "serve2": 270,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNFpgnCh9ZTT-LKddWpS9bn8h-Gf71z3hMLfCSwSMH5TFKTy-YAX2ggplM0-8zv1LQcsTxFX-dLMa5JlX6mK03RRg=s680-w680-h510-rw"
  },
  {
    "id": 14,
    "name": "Kaju Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 180,
    "serve2": 280,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOb8PJUHC1C_0TQNr3NAp6FsaQKkywWXreEyA0OymbZp8UBTStTVGOAu3uqmSoC9oVUdyaxVSi6GnoX1D8riqW4pw=s680-w680-h510-rw"
  },
  {
    "id": 15,
    "name": "Special Fish Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 220,
    "serve2": 320,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPYZCNuwTw7HWi2lm6guwONoVxtR1lDpf3AhSyfnVz83OoHnbPmZbAUDusp5VIg0pycjkPO0SkCCcA-hdNWyVOz4A=s680-w680-h510-rw"
  },
  {
    "id": 16,
    "name": "Prawns Fry Biryani",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 230,
    "serve2": 330,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNj58alv0kniUYCGnyiihvA255rGGv870AffA8K6M_hbJplo_Hcg0MEtp6FT6j0zVMJHAy2Cc8OD-NYO0IcuCaOmg=s680-w680-h510-rw"
  },
  {
    "id": 17,
    "name": "Dum Biryani Rice (Khushka)",
    "category": "Hyderabadi Chicken Dum Biryani",
    "serve1": 100,
    "serve2": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPJ38eMLaLJrPyLBySXLQj_G2n8Cgksrss-dXqZ4unOfhcnNPkaaVYgxyRTIsr2O0U2pNBjwQcHJwuDrsCMlGwyuA=s680-w680-h510-rw"
  },
  {
    "id": 18,
    "name": "Chicken Dum Biryani",
    "category": "Family Pack Biryani",
    "price": 540,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOWLXy8NWHC3XLUSrwAakESTdEP_qcrEm_-TjsOynq8BM4nBdiE64klClRZFhTH4UkNXWx-FvHHvCrMf8xriEpq4Q=s680-w680-h510-rw"
  },
  {
    "id": 19,
    "name": "Special Chicken Biryani",
    "category": "Family Pack Biryani",
    "price": 600,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMt4nYRydvPuShFdht9RtjAOP403-YNCUyRx7vpkdp9732fZ3pA5fjUKfU0JoYVbH2t3UZ8tJakK5p2cfnJ4qbLZA=s680-w680-h510-rw"
  },
  {
    "id": 20,
    "name": "Chicken Fry Piece Biryani",
    "category": "Family Pack Biryani",
    "price": 580,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNy7NpgpUgg8K524bJv2xa_cECthiE782YCDJYkehqTvNlvUzNbPGjBYdtY5neBXHjKw5S_Ti4xk1RKXakVIRHaEg=s680-w680-h510-rw"
  },
  {
    "id": 21,
    "name": "Chicken Lollipop Biryani",
    "category": "Family Pack Biryani",
    "price": 680,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMdSbItKe5BdH_SigFFeFG-DfBWqFEuXc8nsdhcqHmGPLEPCRR7h5ToD_aRJoNgU2h-F1YWUCXFNhg89yofjjIr5g=s680-w680-h510-rw"
  },
  {
    "id": 22,
    "name": "Chicken Kebab Biryani",
    "category": "Family Pack Biryani",
    "price": 630,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNAvjQbmvMEy1QQfsgWZ_2Fb0Q-EpxuTgP1NJ05kw3-iLvCpt80Cnu2QxCgnSWdvUulhlxEHg4d-KD_welxad4osw=s680-w680-h510-rw"
  },
  {
    "id": 23,
    "name": "Chicken 65 Biryani",
    "category": "Family Pack Biryani",
    "price": 600,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPJee-mDrqy-BCll2h9tfGiJScHw33FoT2XICnLmYxZkvpD5HYVpthzMlbFood2UYAosfrj9FNO4REh_tHWTXzWsg=s680-w680-h510-rw"
  },
  {
    "id": 24,
    "name": "Guntur Chicken Biryani",
    "category": "Family Pack Biryani",
    "price": 580,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNMUPkHxHjrlHomBnkzmJ5Dw-FcNVDdad7mpNhNLR47QSDeDJ-SOshtzF4y8cnIo1uHHeALw0s8plXQ4maQ9V5oVQ=s680-w680-h510-rw"
  },
  {
    "id": 25,
    "name": "Gongura Chicken Biryani",
    "category": "Family Pack Biryani",
    "price": 580,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMxxpinsoJsGnr0zso42O0wWLMuSddINptkjwL3ma1F6xDNFug239QRar2pGRAf2ssSMRDNuXmFVcI90O-CXKRebw=s680-w680-h510-rw"
  },
  {
    "id": 26,
    "name": "Paneer Biryani",
    "category": "Family Pack Biryani",
    "price": 520,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOG_q5BPxLhxRUJcpZvGYD-pVsnIOf8fqb9eaW08YNmzfJuFm6r5IRX5KYUhLIaryTGI-lP6Onfrs3sZDn4l5AkgA=s680-w680-h510-rw"
  },
  {
    "id": 27,
    "name": "Babycorn Biryani",
    "category": "Family Pack Biryani",
    "price": 500,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMH8sBlFMgni3XVNpfmMo-gR73Al8rqJX4zcwVSFAhZrboOsL0sUmi6D5Z8hmBRacDWR-e5WdLUFYd1SoItYkwqRg=s680-w680-h510-rw"
  },
  {
    "id": 28,
    "name": "Mushroom Biryani",
    "category": "Family Pack Biryani",
    "price": 500,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNFpgnCh9ZTT-LKddWpS9bn8h-Gf71z3hMLfCSwSMH5TFKTy-YAX2ggplM0-8zv1LQcsTxFX-dLMa5JlX6mK03RRg=s680-w680-h510-rw"
  },
  {
    "id": 29,
    "name": "Vegetable Fry Biryani",
    "category": "Family Pack Biryani",
    "price": 500,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNojumH6k7ker6_FDrSP_gAkYMQ4jX3eEIkI5w6h0e5WTYny9H019y32NHf4Sh9DsoHz8cF-P3jFR3QjSz4EUqtMQ=s680-w680-h510-rw"
  },
  {
    "id": 30,
    "name": "Special Chicken Dry",
    "category": "Non-Veg Starters",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMRwKXXmmR5guSShuUkw7frzy30P9U5ikd_wnVmfWLmaUuj8vef-Cx1MNdJoklTGfSvTJ-hubWRPdO6nyoL2QgJIw=s680-w680-h510-rw"
  },
  {
    "id": 31,
    "name": "Chilli Chicken Dry",
    "category": "Non-Veg Starters",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPC7-uXNmTNU4EcX6ng4yCxkHld7UV29en8zR0K1UiIS1x8Vb3grpN3aG_aouCh6eQki-XNh-O2HEqIhHsrJKO56A=s680-w680-h510-rw"
  },
  {
    "id": 32,
    "name": "Chicken Lollipop Small Dry/Gravy (4 pieces)",
    "category": "Non-Veg Starters",
    "price": '130 | ₹150',
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNhhh1SCgd4aK3yOZADtf0gFfaq5YXLcIIxzWIxsFgjDW6awkVDYEFqvSq8VvsJHaMzAoPjQ7hPH9yAjp6rnqWtRA=s680-w680-h510-rw"
  },
  {
    "id": 33,
    "name": "Chicken Lollipop Large Dry/Gravy (8 pieces)",
    "category": "Non-Veg Starters",
    "price": '230 | ₹250',
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNhhh1SCgd4aK3yOZADtf0gFfaq5YXLcIIxzWIxsFgjDW6awkVDYEFqvSq8VvsJHaMzAoPjQ7hPH9yAjp6rnqWtRA=s680-w680-h510-rw"
  },
  {
    "id": 34,
    "name": "Chicken Kabab Small Dry (5 pieces)",
    "category": "Non-Veg Starters",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhP-upSdnCDACPfzkBnsi5PxMbN_FCzE_HPUbvFktcsvvLKqKPK5yGpp41ishggbsBm6qejxI2To_HX-jED6J4WZBQ=s680-w680-h510-rw"
  },
  {
    "id": 35,
    "name": "Chicken Kabab Large Dry (10 pieces)",
    "category": "Non-Veg Starters",
    "price": 230,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhP-upSdnCDACPfzkBnsi5PxMbN_FCzE_HPUbvFktcsvvLKqKPK5yGpp41ishggbsBm6qejxI2To_HX-jED6J4WZBQ=s680-w680-h510-rw"
  },
  {
    "id": 36,
    "name": "Chicken 555",
    "category": "Non-Veg Starters",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPojIf5KSPCP2VB51j9HgUPUX9ic0-FVC8jMpPfg1kTJh1r6BQPY1iuN_VkYl8ZlEBRM1YfWsjIz37yRef5wJXyMw=s680-w680-h510-rw"
  },
  {
    "id": 37,
    "name": "Dragon Chicken",
    "category": "Non-Veg Starters",
    "price": 230,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhProj1y57LQw1sX6Khkn1QWI3vbnQxdo0rKcQg_VmrbNPfIoeM4xCb8nfUlHGrhfeWm1Gjb3zEiENH8IQXQzNMWDA=s680-w680-h510-rw"
  },
  {
    "id": 38,
    "name": "Chicken Pepper Dry",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMS8OxL14Y880jexgzGQAP9kGQCfXeouSekf2xlh6NMBCsKf7ayMi5iROWAwkrHuf9Gj1gkCaFtGqWHmeGPdmbi_A=s680-w680-h510-rw"
  },
  {
    "id": 39,
    "name": "Gongura Chicken Dry",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNu7pytJWhgR2FUEPcdgJQPhEbHAS8-GonWPMgKoTDfUyeRBhoWz9sklpP1p8GLQpabddWxLqxE283XFEj6Jq1gSg=s680-w680-h510-rw"
  },
  {
    "id": 39.1,
    "name": "Crispy Chicken Dry",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOkCH1dtI5sE31mcBiEzreISZxg4VP1B-gX_BxJ-arbJxcnxiS2nLCHzZ5sc_po2oCnf2SzjoGMjmAMVGOcMFKzxQ=s680-w680-h510-rw"
  },
  {
    "id": 40,
    "name": "Lemon Chicken Dry",
    "category": "Non-Veg Starters",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMMit1jS44vziaZ02e0_icVJXHX5Fyoy6LrNrxFh7CAHD8BtD4ftiEDgFwU-cUO-qlyeWa54iQNC8Y739TNsu2Slw=s680-w680-h510-rw"
  },
  {
    "id": 41,
    "name": "Chicken 65 Dry",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPG3wqCly1c3xpWBIS2hPok7afUFPfnlm3DHbXGPColZQoySvcn6DkLT_X8oJ8Jvw8eVjxCrldejkEyv3Y8y05_6w=s680-w680-h510-rw"
  },
  {
    "id": 42,
    "name": "Chicken Manchurian",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOt4qWYhyGmxBo_cPZp8EF_kOaeVFRJ4pu2YlryUVKPxj6FuIS8SLcu2eDMHbZ9Y00JiH--b653lZDHBwc2IG_rSQ=s680-w680-h510-rw"
  },
  {
    "id": 43,
    "name": "Schezwan Chicken Dry",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNHDlTiWcPk746ESPPHLg40HXpXq1pSVGNY7uUpUErHnP9rLQJsX0WoFuV1eFKdJUg0KW4Rh74SPE7XqTx1cwrl-A=s680-w680-h510-rw"
  },
  {
    "id": 44,
    "name": "Andhra Chilli Chicken",
    "category": "Non-Veg Starters",
    "price": 210,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMzeUtyg9NPRpfbbHHdP-kx5R6Lry4MxXcuLSNihtBK2PNYutJZ7Ozf9BHeePeSecKLJxTXKDaNo00AzioJOBKDzA=s680-w680-h510-rw"
  },
  {
    "id": 45,
    "name": "Chicken Fry",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOUfASuF3eTL3dFy0sGsTSdNlqq0SR_JNkHtaGo76Ku-J3-uVU-Z4hSgUr7Ki_0L-UTMCH7rHcv7l01R4sUX_t9sw=s680-w680-h510-rw"
  },
  {
    "id": 46,
    "name": "Chicken Ghee Roast",
    "category": "Non-Veg Starters",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNRpUhQOGm-zJX20sI11buFR8RqYOORUVQvi94WIvw78FcYuzVcAxCMR2ccPL7eilJdboFXNEWFU-0Q15K6THSGzQ=s680-w680-h510-rw"
  },
  {
    "id": 47,
    "name": "Majestic Chicken",
    "category": "Non-Veg Starters",
    "price": 220,
    "image_url": "https://www.shanazrafiq.com/wp-content/uploads/2021/03/2-Chicken-Majestic-pic-2-2.jpg"
  },
  // {
  //   "id": 48,
  //   "name": "Chicken 555",
  //   "category": "Non-Veg Starters",
  //   "price": null,
  //   "image_url": "images/chicken_555.jpg"
  // },
  {
    "id": 49,
    "name": "Guntur Chicken Fry",
    "category": "Non-Veg Starters",
    "price":200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOsGMBQQ02Mtnsne72SEKGnzmBDH6GAoQWKVF7JxVFuSYaPej3P7FDA4EPEH1JZjOU4OVcxBxV1WfMnqxOYC04KDA=s680-w680-h510-rw"
  },
  {
    "id": 50,
    "name": "Garlic / Ginger Chicken",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPG3wqCly1c3xpWBIS2hPok7afUFPfnlm3DHbXGPColZQoySvcn6DkLT_X8oJ8Jvw8eVjxCrldejkEyv3Y8y05_6w=s680-w680-h510-rw"
  },
  {
    "id": 51,
    "name": "Gongura Chicken Fry",
    "category": "Non-Veg Starters",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPtLytTncHLzyFlOZ_3hqQd35ff_2thAZP_AILcZZx5LkU0gAwSda5H01TQLqZcqS3FieovV-Lv8Q3Occ_7Oovu3A=s680-w680-h510-rw"
  },
  // {
  //   "id": 52,
  //   "name": "Mutton Fry",
  //   "category": "Non-Veg Starters",
  //   "price": null,
  //   "image_url": "images/mutton_fry.jpg"
  // },
  // {
  //   "id": 53,
  //   "name": "Gongura Mutton Fry",
  //   "category": "Non-Veg Starters",
  //   "price": null,
  //   "image_url": "images/gongura_mutton_fry.jpg"
  // },
  {
    "id": 54,
    "name": "Egg Chilli",
    "category": "Egg Starter",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPFhHLPZROWDPzpBcM_Eu1kG9z-9Q8j-F0Sp0vzf551V9tBhO1pz9EZRM8kIT4EOMgyzc8QBGGC3wJaU4R8kFz1IQ=s680-w680-h510-rw"
  },
  {
    "id": 55,
    "name": "Egg Manchurian",
    "category": "Egg Starter",
    "price": 130,
    "image_url": "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2019/09/Egg-Manchurian-3.jpg?resize=683%2C1024&ssl=1"
  },
  {
    "id": 56,
    "name": "Egg Pepper",
    "category": "Egg Starter",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNj0AJktPvVi_laW8M6x5kCsoTxN5hKDMjcXsir2BXC5G8nTz_NIt6Xp81gTc_AXHIl7ps56UAk3S3O5f_wNFoXGw=s680-w680-h510-rw"
  },
  {
    "id": 57,
    "name": "Egg 65",
    "category": "Egg Starter",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPp3P_48lM1Osce_CQmvfLrUkdG4psW9psiPj5rHjX1PYFPuG0Jpk1ewuRWefvjj8CjZfDBn_raAZ64xkSlBb6I2A=s680-w680-h510-rw"
  },
  {
    "id": 58,
    "name": "Egg Masala / Curry (3 Eggs)",
    "category": "Egg Starter",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMVi4Rqj_dLdcmKIhtiY3T6ZB5LlqI-rR097M0x_Qb5wyUcI4-34eyM36l96-Lm2uqct7bPCOvAYWxsxeTTJJlagQ=s680-w680-h510-rw"
  },
  {
    "id": 59,
    "name": "Egg Bhurji (3 Eggs)",
    "category": "Egg Starter",
    "price": 80,
    "image_url": "https://www.theloveofspice.com/wp-content/uploads/2022/03/egg-bhurji.jpg"
  },
  {
    "id": 60,
    "name": "Egg Omelet",
    "category": "Egg Starter",
    "price": 30,
    "image_url": "https://aayanshkitchen.com/wp-content/uploads/2023/12/Egg-Omelette.jpg"
  },
  {
    "id": 61,
    "name": "Double Egg Omelet",
    "category": "Egg Starter",
    "price": 40,
    "image_url": "https://aayanshkitchen.com/wp-content/uploads/2023/12/Egg-Omelette.jpg"
  },
  {
    "id": 62,
    "name": "Egg Half Boil",
    "category": "Egg Starter",
    "price": 25,
    "image_url": "https://www.jinooskitchen.com/wp-content/uploads/2018/05/half-boil-final.jpg"
  },
  {
    "id": 63,
    "name": "Boiled Egg - 2",
    "category": "Egg Starter",
    "price": 30,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhM8dj4OogUTn1d5rEfVPe3J0wDaTngaL2jySNWceMFCi_ADBes_qWueW50zEGpwl3xMKadRanQ9cWeiouMDTG5X-g=s680-w680-h510-rw"
  },
  {
    "id": 64,
    "name": "Paneer Chilli",
    "category": "Veg Starters",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOmOpaGLMl-pMOImrjmPrJtLQmMNkbqlGm5CKqOm8Aaz248PNFRyz4rf8Ll0PRtgJXdLUI-vz4Km8owPCK-Do7HBg=s680-w680-h510-rw"
  },
  {
    "id": 65,
    "name": "Paneer Manchurian",
    "category": "Veg Starters",
    "price": 190,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShh-HviiLsYifpmn9emnDt7lxFSuOzOijDwQ&s"
  },
  {
    "id": 66,
    "name": "Paneer Pepper",
    "category": "Veg Starters",
    "price": 190,
    "image_url": "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2016/03/paneer-pepper-masala-1.jpg?resize=4592%2C3657"
  },
  {
    "id": 67,
    "name": "Paneer 65",
    "category": "Veg Starters",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOLRWnecdiOAq1Esyyr1V9r9574OOQUzkrQadKoirHQLNWmwvlhfr38r8FcFsCNXRchqhy9qE8-iNA2je2ZgHacxg=s680-w680-h510-rw"
  },
  {
    "id": 68,
    "name": "Mushroom Chilli",    
    "category": "Veg Starters",
    "price": 180,
    "image_url": "https://www.thevellorekitchen.in/wp-content/uploads/2023/01/Chilli-Mushroom-Dry.jpg"
  },
  {
    "id": 69,
    "name": "Mushroom Manchurian",
    "category": "Veg Starters",
    "price": 180,
    "image_url": "https://cdn2.foodviva.com/static-content/food-images/chinese-recipes/mushroom-manchurian-recipe/mushroom-manchurian-recipe.jpg"
  },
  {
    "id": 70,
    "name": "Mushroom Pepper",
    "category": "Veg Starters",
    "price": 180,
    "image_url": "https://www.relishthebite.com/wp-content/uploads/2018/06/mushroomPepperRestaurantstyle-11.jpg"
  },
  {
    "id": 71,
    "name": "Mushroom 65",
    "category": "Veg Starters",
    "price": 180,
    "image_url": "https://herbivo.in/wp-content/uploads/2023/03/Mushroom-65.png.webp"
  },
  {
    "id": 72,
    "name": "Babycorn Chilli",
    "category": "Veg Starters",
    "price": 170,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPzr5alW_Kk1N_GOLys2-KbKvW9NsV2MSM-8Jfaz2b5_ydhQAjQmltys0R2yU0O-sdgu4d_jrUspxZ61goBb8Sd-w=s680-w680-h510-rw"
  },
  {
    "id": 73,
    "name": "Babycorn Manchurian",
    "category": "Veg Starters",
    "price": 170,
    "image_url": "https://www.easycookingwithmolly.com/wp-content/uploads/2020/04/baby-corn-manchurian.jpg"
  },
  {
    "id": 74,
    "name": "Babycorn Pepper",
    "category": "Veg Starters",
    "price": 170,
    "image_url": "https://newhongkong.in/wp-content/uploads/2020/12/Baby-Corn-Salt-n-Pepper2.jpg"
  },
  {
    "id": 75,
    "name": "Babycorn 65",
    "category": "Veg Starters",
    "price": 170,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPVDO2vXqTaeOOlHvliN7ZcWLanQblmdG89wv_lMnwuOrUazIifPkRUj-9Hd5ncSyuNRnAUZJ1EBSqr6IsZCRn3Fw=s680-w680-h510-rw"
  },
  {
    "id": 76,
    "name": "Gobi Chilli",
    "category": "Veg Starters",
    "price": 150,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNApUwXWZdD5ZAO1f50D2UgDbh6DzZl2YEJZK4il_07bbI29jgZs6lvNNotdF_dq2vfkEdu_jTmGKMfG3KNCVViFg=s680-w680-h510-rw"
  },
  {
    "id": 77,
    "name": "Gobi Manchurian",
    "category": "Veg Starters",
    "price": 150,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPYL8oydvtB9Yb3jNvat5NWEKhyY4NDwwEbv6CEY7vh8u16UWITdOd8MshDoHpWQ5vTw0T4Em19f4k5ceVRdw_MRg=s680-w680-h510-rw"
  },
  {
    "id": 78,
    "name": "Gobi Pepper",
    "category": "Veg Starters",
    "price": 150,
    "image_url": "https://mamasecretrecipes.ca/wp-content/uploads/2019/01/cauliflower-pepper-masala.jpg"
  },
  {
    "id": 79,
    "name": "Gobi 65",
    "category": "Veg Starters",
    "price": 150,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPeL_BJmob1Ws8fQQRLizEkMse-zXWDfavDP3lwlPtTTZv7RlPYh3AIFV-D8d6aSzPSOZDqRp7vKHM_Lv_SCRttrQ=s680-w680-h510-rw"
  },
  {
    "id": 80,
    "name": "Chicken Masala",
    "category": "Non Veg Curry",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOvE4erWVfmpvkQko3xLpc28uszRGXXKVTnEQmdsNWvLWbWlRty_oISvuZEbKeYPnsh1v9KDpGQkSuKcVsnaVdpLQ=s680-w680-h510-rw"
  },
  {
    "id": 81,
    "name": "Chicken Kadai",
    "category": "Non Veg Curry",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOvE4erWVfmpvkQko3xLpc28uszRGXXKVTnEQmdsNWvLWbWlRty_oISvuZEbKeYPnsh1v9KDpGQkSuKcVsnaVdpLQ=s680-w680-h510-rw"
  },
  {
    "id": 82,
    "name": "Butter Chicken Masala",
    "category": "Non Veg Curry",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNeuVe7rp4oMvgylMBU_GhGJWld2Oti7ekOYTXEUacbwCPOgPz5wLTZh2KTf1H18Dq6Yq6dVFiODV2rhojKw7OzmQ=s680-w680-h510-rw"
  },
  {
    "id": 83,
    "name": "Chicken Hyderabadi",
    "category": "Non Veg Curry",
    "price": 190,
    "image_url": "https://untoldrecipesbynosheen.com/wp-content/uploads/2021/12/hyderabadi-chicken-main-1.jpg"
  },
  {
    "id": 84,
    "name": "Methi Chicken",
    "category": "Non Veg Curry",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNwPM5Y0u7ZZ1qEEnHfAVGPSjcov660hykhVCk0lqbtPGroYUVhCpWjwcC6OF7YmCZy1PAQUHqXAXihL-_q3IgEXg=s680-w680-h510-rw"
  },
  {
    "id": 85,
    "name": "Chicken Do Pyaza",
    "category": "Non Veg Curry",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOfhqoFgfKF7ARLjR-n1JSyuCJg7h2psU9lyuaTzCDjhXvYCcttnwuNjt2YzT2s_Iqh0q8QdpxdheJ5CBeapNoYiA=s680-w680-h510-rw"
  },
  {
    "id": 86,
    "name": "Chicken Mughlai",
    "category": "Non Veg Curry",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhORI1F3-JnJl2POr2V0vDI-vD1uXY9wOwQ9Xv8GdKejIoQViV20gwwxsZbYCh5zneMqghDxrwo8rb9IkitcG7ajSg=s680-w680-h510-rw"
  },
  {
    "id": 87,
    "name": "Chicken Punjabi",
    "category": "Non Veg Curry",
    "price": 200,
    "image_url": "https://www.foodyindianmom.com/images/punjabi_chicken.png"
  },
  {
    "id": 88,
    "name": "Guntur Chicken Curry",
    "category": "Non Veg Curry",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhO41ofWJR_LKFasng6zFe2TfiW1MRNka1VC6Xd2NT9AJ2YAvrxU7GVOcQMTTuTT1GQeTkWSPX4XkhfH6S-Fo3-C8w=s680-w680-h510-rw"
  },
  {
    "id": 89,
    "name": "Gongura Chicken Curry",
    "category": "Non Veg Curry",
    "price": 190,
    "image_url": "https://media.oceanofrecipes.com/images/indian/gongura-chicken/42.JPG"
  },
  {
    "id": 90,
    "name": "Paneer Butter Masala",
    "category": "Veg Curry",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPO-TohNRr7qn2yqcRVvnR7_botP_hMEo1hmzlYlvF29L6EEThw9xODQZryuDLDS_8DtOJlaitrv-lvcm7-we5bfA=s680-w680-h510-rw"
  },
  {
    "id": 91,
    "name": "Paneer Kadai",
    "category": "Veg Curry",
    "price": 190,
    "image_url": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg"
  },
  {
    "id": 92,
    "name": "Paneer Palak",
    "category": "Veg Curry",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNQadNAngb_NnBAazOOi8FkJPTbLXLvEXNsuJfAf9OUPjgYhHoraDhGUAAuQM0OSKbMNMuOxObJWUOO_FB8zKd4NA=s680-w680-h510-rw"
  },
  {
    "id": 93,
    "name": "Kaju Paneer",
    "category": "Veg Curry",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNEc0MSl2GdWsK3FPdKCvZdb88mHIrIg2o7kTb-9HUOR17y33wKxIpv88DXUsqnFwWNRD_EyUXdmVEYL_FF4TXVVg=s680-w680-h510-rw"
  },
  {
    "id": 94,
    "name": "Kaju Masala",
    "category": "Veg Curry",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMQ8ACage0bhYyl61OVSNrcK2ZNsW_5R8wx4hBX74I5iWRsumG1pHLtCLMtlI_WiJiyjolrVk0W0DjhVIM80waaAg=s680-w680-h510-rw"
  },
  {
    "id": 95,
    "name": "Kaju Butter Masala",
    "category": "Veg Curry",
    "price": 190,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOVifsrO__4VBjxKsxjMljowRM92VkZNDl0eN1cSqZx-0MJFJdXHUMlVsNbEOQApWgP6ejLavDHNHIHDeX4XNBSmQ=s680-w680-h510-rw"
  },
  // {
  //   "id": 96,
  //   "name": "Paneer Kadai",
  //   "category": "Veg Curry",
  //   "price": 150,
  //   "image_url": "images/paneer_kadai.jpg"
  // },
  // {
  //   "id": 97,
  //   "name": "Kaju Butter Masala",
  //   "category": "Veg Curry",
  //   "price": 200,
  //   "image_url": "images/kaju_butter_masala.jpg"
  // },
  {
    "id": 98,
    "name": "Mushroom Masala",
    "category": "Veg Curry",
    "price": 180,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMbCtqqhDpdAuMaR2mDSRTCgVQMyrSOudidyRruex6-sntSW4Z5cw5fMchdfbPV8i4ARa7IiuDmK3NyXSoOOF-nAg=s680-w680-h510-rw"
  },
  {
    "id": 99,
    "name": "Mushroom Kadai",
    "category": "Veg Curry",
    "price": 180,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOoZ_ozxbg10AWDJxRLu3PccSiX9qD5gzh40kWbC5ATZcvCpEcibUjuPt1QBHjEwRgA3hdHuAeGj9f1d1sIBrVTyg=s680-w680-h510-rw"
  },
  {
    "id": 100,
    "name": "Mix Veg Curry",
    "category": "Veg Curry",
    "price": 160,
    "image_url": "https://vegecravings.com/wp-content/uploads/2018/02/Mix-Veg-Recipe-Step-By-Step-Instructions.jpg"
  },
  {
    "id": 101,
    "name": "Dal Tadka",
    "category": "Veg Curry",
    "price": 100,
    "image_url": "https://c.ndtvimg.com/2021-01/dgdlkf8_dal-tadka_625x300_14_January_21.jpg"
  },
  {
    "id": 102,
    "name": "Dal Fry",
    "category": "Veg Curry",
    "price": 80,
    "image_url": "https://madhurasrecipe.com/wp-content/uploads/2020/10/Dal-Fry-Marathi-Recipe.jpg"
  },
  {
    "id": 103,
    "name": "Chapathi",
    "category": "Bread",
    "price": 20,
    "image_url": "https://5.imimg.com/data5/SELLER/Default/2024/11/464543474/HA/BB/JR/2837532/500g-insta-foods-frozen-chapati-500x500.jpeg"
  },
  {
    "id": 104,
    "name": "Parota",
    "category": "Bread",
    "price": 25,
    "image_url": "https://www.recipesaresimple.com/wp-content/uploads/2020/10/kerala-parotta-recipe.jpeg"
  },
  {
    "id": 105,
    "name": "Chicken Fried Rice",
    "category": "Fried Rice",
    "price": 120,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhM9Xhl4yWvU7a3v8JyFrJ9vY19HJC9otxS15dxM--0bAwfG-imcHTrY3kFk1wJzB6X_FzgM45ynmipHL1NTh0Ck6w=s680-w680-h510-rw"
  },
  {
    "id": 106,
    "name": "Egg Fried Rice",
    "category": "Fried Rice",
    "price": 120,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNyeVjIdFPs7iW_CLZW0aPqYSvIQbWgXepiY-ZpaX1Yu9ZhdC8vLZkZz4Xi7jtb9pAO1KmXNhmBN0ZGaR5Duff1xA=s680-w680-h510-rw"
  },
  {
    "id": 107,
    "name": "Veg Fried Rice",
    "category": "Fried Rice",
    "price": 100,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNxdK2Sfst4Hx_-k1jTJxl3KeBfT168ICP8GhzNrxik_uGpxITuYzy92MitKfthI9EmMZQ9Vg5_Vi7ChM2e0gXMBg=s680-w680-h510-rw"
  },
  {
    "id": 108,
    "name": "Mushroom Fried Rice",
    "category": "Fried Rice",
    "price": 110,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNQJTqNbetX5hujGyY63WB16EHSjlCeohzALFyMPLXwgP7IvDTpV43i8NS6IgO68TGb7GB3jTUimwg0tk_GV-Eo6Q=s680-w680-h510-rw"
  },
  {
    "id": 109,
    "name": "Paneer Fried Rice",
    "category": "Fried Rice",
    "price": 120,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhP_w3mPzh22Zv-LNwQ5yIF5qTB7rOCtGSkyHYLT-UXgYEcfDrXGOekHu5EnD7xcTjQOTxPGTB2tTClrMAw_q3hjow=s680-w680-h510-rw"
  },
  {
    "id": 110,
    "name": "Babycorn Fried Rice",
    "category": "Fried Rice",
    "price": 120,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPYIrb6LXKaScNEOqFssCuDC_VhkWLt_mF9Nsgc6W_xGCZLi2SzQw2KrWrnV8UhKRqOwQjNdZDwKk4cHcgGiTeKxA=s680-w680-h510-rw"
  },
  {
    "id": 111,
    "name": "Gobi Fried Rice",
    "category": "Fried Rice",
    "price": 110,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOiZpFRrFl4znpCnmBg8n1SZerDijSQzEYKKTPnH4n03HQWM7JBWQKS-ASomcBvMtzKiOMz3T8O7uOS06HH5pyFug=s680-w680-h510-rw"
  },
  {
    "id": 112,
    "name": "Jeera Rice",
    "category": "Fried Rice",
    "price": 90,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMXL8wU35UC9O5fRitpeji1QHL6GH55mZoLd9jd7r2f4Y5hyfbrQ56W0R6vVCZ5BwIe1hkRAc4gOnrinuAqQNnebg=s680-w680-h510-rw"
  },
  {
    "id": 113,
    "name": "Ginger Rice",
    "category": "Fried Rice",
    "price": 100,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMXL8wU35UC9O5fRitpeji1QHL6GH55mZoLd9jd7r2f4Y5hyfbrQ56W0R6vVCZ5BwIe1hkRAc4gOnrinuAqQNnebg=s680-w680-h510-rw "
  },
  {
    "id": 114,
    "name": "Garlic Chicken Fried Rice",
    "category": "Fried Rice",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhP2rryucvh5ohiXAGvsk2_5DDr5-DhKco2WRmnN-HmJCK6uj5G-wnaDrbqkQDRXYQ4HkM6RmBsyL6gFkAzcG6DOHQ=s680-w680-h510-rw"
  },
  {
    "id": 115,
    "name": "Ginger Chicken Fried Rice",
    "category": "Fried Rice",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOA3heDUuHHDvImO852AH1WiUqsqR_mewBBdT_YYVqCzXzi604ftaA0FwITYvonKl9r1dC-ipNgOaIj2LGCSGwCPg=s680-w680-h510-rw"
  },
  {
    "id": 116,
    "name": "Schezwan Veg Fried Rice",
    "category": "Fried Rice",
    "price": 120,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNl5BfgzX6v4iwzUTdx9fFQaFaWBYFNOqDCW7YQ9_TAd27RtNR6KV8UEs7CF0_0R4MUhtS9tf2my4aEFK8qQRMbaw=s680-w680-h510-rw"
  },
  {
    "id": 117,
    "name": "Schezwan Chicken Fried Rice",
    "category": "Fried Rice",
    "price": 140,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPMa-_3tTNKRGZYhE4yr_wEIdLeVlVBdFRSUu3A7CRGL02WTb7-xFj9L2OehjBrX-xHTlu9nrxNFyZVUI6-4_RLtw=s680-w680-h510-rw"
  },
  {
    "id": 118,
    "name": "Fish Curry",
    "category": "Sea Food",
    "price": 170,
    "image_url": "https://www.licious.in/blog/wp-content/uploads/2021/01/basa-fish-curry.jpg"
  },
  {
    "id": 119,
    "name": "Fish Masala",
    "category": "Sea Food",
    "price": 170,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH57E4H9uZmv38OUKHwGGZm9q98VbfpKUeQ&s"
  },
  {
    "id": 120,
    "name": "Apollo Fish",
    "category": "Sea Food",
    "price": 210,
    "image_url": "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-Apollo-Fish.jpg"
  },
  {
    "id": 121,
    "name": "Fish Chilli",
    "category": "Sea Food",
    "price": 180,
    "image_url": "https://www.licious.in/blog/wp-content/uploads/2020/12/Chilli-Fish.jpg"
  },
  {
    "id": 122,
    "name": "Fish Manchurian",
    "category": "Sea Food",
    "price": 180,
    "image_url": "https://www.freshtohome.com/blog/wp-content/uploads/2024/06/Screenshot-2024-06-27-152710.png"
  },
  {
    "id": 123,
    "name": "Fish Pepper",
    "category": "Sea Food",
    "price": 180,
    "image_url": "https://www.yummytummyaarthi.com/wp-content/uploads/2016/02/1-21.jpg"
  },
  {
    "id": 124,
    "name": "Fish 65",
    "category": "Sea Food",
    "price": 180,
    "image_url": "https://hemamagesh.com/wp-content/uploads/2020/06/featured-image-1.jpg"
  },
  {
    "id": 125,
    "name": "Prawns Chilli",
    "category": "Sea Food",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMASssq6Bg1A_OwI0k1LjKw078KO_XATQ34immnzn9Qk1s8NAbBt1wIEgw46TB7UhYOgEHqeQjNORPMGMw12SLBAg=s680-w680-h510-rw"
  },
  {
    "id": 126,
    "name": "Prawns Manchurian",
    "category": "Sea Food",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNv-qSFPfvBdR5P89iaETqVdT6tWcTS53FuBPhZBXBoC_HouVGez_-ClCdcorTdBjgseW96xTE2zXtRnIY_IzBNlg=s680-w680-h510-rw"
  },
  {
    "id": 127,
    "name": "Prawns Pepper",
    "category": "Sea Food",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhO31R24QmDPyrX2QqCuKMePxq8PVcoPXOY7WlbZhDjAoQfHze3Lj-WL0SYGTJvSSqqA2dInZlKWOaJrpUYfCD26VQ=s680-w680-h510-rw"
  },
  {
    "id": 128,
    "name": "Prawns 65",
    "category": "Sea Food",
    "price": 200,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPY1qiOikyzvTrU5BxgrzaLVGr3TYNVERbDbhBwaWjD4eNT1jsvFrIbH74cVwOXtF_DMH2nx3J7pyFPE4ZfVngdTw=s680-w680-h510-rw"
  },
  {
    "id": 129,
    "name": "Prawns Roast",
    "category": "Sea Food",
    "price": 220,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhP_MdlDFxrXjFAzr5eBPdyfX10okrgiB1a0-jzhszUu4LPiA-7m5D50W9OPq3KrdIxTsCZoxxgFJAw8ashoWqDsvQ=s680-w680-h510-rw"
  },
  {
    "id": 130,
    "name": "Gulab Jamun (3Pcs)",
    "category": "Desserts",
    "price": 50,
    "image_url": "https://www.meatmutton.com/wp-content/uploads/2024/09/gulabjamun.jpg"
  },
  {
    "id": 131,
    "name": "Buttermilk",
    "category": "Desserts",
    "price": 25,
    "image_url": "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/buttermilk.webp?updatedAt=1727162114085"
  },
  {
    "id": 131.1,
    "name": "Soft Drinks",
    "category": "Desserts",
    "price": 'MRP',
    "image_url": "https://www.shutterstock.com/image-photo/poznan-poland-oct-28-2021-260nw-2071581119.jpg"
  },
  {
    "id": 132,
    "name": "Egg Thali",
    "category": "Thali",
    "price": 100,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNXkBqlh0A4ZzChtKXLoK25kovt6JynRN1WUCjQVQrkJ8XgXg7xpeSp9eEGbt1VUy07b182tDslf7z4BJ_j1rhPcw=s680-w680-h510-rw"
  },
  {
    "id": 133,
    "name": "Chicken Thali",
    "category": "Thali",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOStd_je7x7XE-ejWWgaKwQYALi54TiECnHIi-TxmIgTG4-a4iq6DhtfH_a6R48Mg6x7kySkJeZzkZ1XD_hmOY43Q=s680-w680-h510-rw"
  },
  {
    "id": 134,
    "name": "Paneer Thali",
    "category": "Thali",
    "price": 130,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNaNA3abfqcWv5Er0xZN-AJiLLCbpeyUthJsCzNWDk3JZ3Uue1bgqOSTiz0CRyR4PST9Pd0M-IGefDwD5ETu0srAg=s680-w680-h510-rw"
  },
  {
    "id": 135,
    "name": "Veg Thali",
    "category": "Thali",
    "price": 90,
    "image_url": "https://lh3.googleusercontent.com/-UjIJrXA_kWw/aG-LS2fGigI/AAAAAAAAAYs/zXSgm7pj6fgAf2ZB-ZPJUf8U7uUbNG9GwCLQBGAYYCw/s680-w680-h510-rw/2025-07-10.jpg"
  },
  {
    "id": 136,
    "name": "Combo 1-Chicken Dum Biryani, lollipop or kabab (2 pisces), 200ml softdrink. double ka meetha gulab jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 300,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPSGdnyK8KNKDdy4UtmjErh4gb9GX-H0AcpvnfkN9EBDN8chvPW14vtGeSoUhZej71Jof39hHCZPn2q9JjsAqVBLg=s680-w680-h510-rw"
  },
  {
    "id": 137,
    "name": "Combo 2-Special Chicken Biryani, lollipop or kabhah (2 pisces), 200ml softdrink, double ka meetha/gulab Jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 350,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMUeWgkC4hYXJAtuwCwQ_wP1n9vLvdk1q8fn4jKIBcB9uzq5EdTMUeM8Q2QxLEw5JfipK6XJ6llvXA18nBSM9rSyg=s680-w680-h510-rw"
  },
  {
    "id": 138,
    "name": "Combo 3-Pancer Biryani, gobi manchurian, 200ml softdrink, double ka meetha gulab Jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 280,
    "image_url": "https://rp-media.faasos.io/catalog/images/AOC4ZMQMIMPH.jpeg"
  },
  {
    "id": 139,
    "name": "Combo 4-Mushroom Biryani, gobi manchurian, 200md coftdrink, double ka wootka/gulab jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 280,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNFpgnCh9ZTT-LKddWpS9bn8h-Gf71z3hMLfCSwSMH5TFKTy-YAX2ggplM0-8zv1LQcsTxFX-dLMa5JlX6mK03RRg=s680-w680-h510-rw"
  },
  {
    "id": 140,
    "name": "Comba 5-Chicken Dum Biryani (Family pack). lollipop or kabab (4 pieces), 750ml softdrink, double ka meetha/gulab Jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 700,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhN5SGyjm4gvhztFAoMnbIr2OBt5EwN5wBDDIDYEVW3Q_mCjTeUd-_43_f-rtOs5OuZfDx1xOuXcQ9mM6qn-U-GJuQ=s680-w680-h510-rw"
  },
  {
    "id": 141,
    "name": "Combo 6-Special Chickan Biryani (Family pack), Bollipop or kabab (4 pieces), 750ml safidriak, double ka mootha/gulab jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 750,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPr6T4lqQgS-PhDzN7mfoSVAJLHwKrNB1QsofJFG8ixc0SBK-4X7j0VfKx0oPZBxBkpiHoZhCxsuuHejwOVai52yQ=s680-w680-h510-rw"
  },
  {
    "id": 142,
    "name": "Combo 7-Paneer Biryani (Family pack). gobi manchurian, 750ml softdrink, double ka meetha gulab jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 650,
    "image_url": "https://rp-media.faasos.io/catalog/images/AOC4ZMQMIMPH.jpeg"
  },
  {
    "id": 143,
    "name": "Combo 8-Mushroom Biryani (Farmity pack) gobi manchurian, 750ml softdrink, double ka meetha/gulab jamun",
    "category": "Party Pack Biryani (Combos)",
    "price": 650,
    "image_url": "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNFpgnCh9ZTT-LKddWpS9bn8h-Gf71z3hMLfCSwSMH5TFKTy-YAX2ggplM0-8zv1LQcsTxFX-dLMa5JlX6mK03RRg=s680-w680-h510-rw"
  }
];