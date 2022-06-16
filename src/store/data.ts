export type IData = {
  country: string;
  value: string;
  cities: CitiesData;
};

export type CitiesData = {
  city: string;
  value: string;
};

export const json = [
  {
    country: "Ukraine",
    value: "Ukraine",
    cities: [
      {
        city: "Zaporizhzha",
        value: "Zaporizhzha",
      },
      {
        city: "Kiyv",
        value: "Kiyv",
      },
      {
        city: "Kharkiv",
        value: "Kharkiv",
      },
      {
        city: "Odessa",
        value: "Odessa",
      },
      {
        city: "Dnipro",
        value: "Dnipro",
      },
      {
        city: "Lviv",
        value: "Lviv",
      },
      {
        city: "Poltava",
        value: "Poltava",
      },
    ],
  },
  {
    country: "United States",
    value: "United States",
    cities: [
      {
        city: "Washington",
        value: "Washington",
      },
      {
        city: "New-York",
        value: "New-York",
      },
      {
        city: "Los-Angeles",
        value: "Los-Angeles",
      },
      {
        city: "Chicago",
        value: "Chicago",
      },
      {
        city: "Boston",
        value: "Boston",
      },
      {
        city: "Denwer",
        value: "Denwer",
      },
    ],
  },
  {
    country: "Great Britain",
    value: "Great Britain",
    cities: [
      {
        city: "London",
        value: "London",
      },
      {
        city: "Liverpool",
        value: "Liverpool",
      },
      {
        city: "York",
        value: "York",
      },
      {
        city: "Oxford",
        value: "Oxford",
      },
      {
        city: "Edinburgh",
        value: "Edinburgh",
      },
      {
        city: "Nottingham",
        value: "Nottingham",
      },
    ],
  },
];
