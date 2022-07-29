import { proxy } from "valtio";

export const state = proxy({
    current: "tongue",
    items: {
      tick: "#ffffff",
      logo: "#ffffff",
      collar: "#ffffff",
      heel: "#ffffff",
      quarter_bet: "#ffffff",
      OUTSOLE: "#ffffff",
      midsole: "#ffffff",
      laces: "#ffffff",
      linear: "#ffffff",
      eyelets: "#ffffff",
      Spitze: "#ffffff",
      tongue: "#ffffff",
      toe_box: "#ffffff",
      toe: "#ffffff",
      stitchmidsole: "#ffffff",
    },
    num: {
      tongue: 1,
      toe: 2,
      logo: 3,
      laces: 4,
      midsole: 5,
      heel: 6,
      OUTSOLE: 7,
      tick: 8,
      collar: 9,
      linear: 10,
      eyelets: 11,
      Spitze: 12,
      quarter_bet: 13,
    }
  })