// @flow

export type Theme = {
  getColor: string => string,
  getFontSize: string => string,
  getBtnSize: string => string,
  getBtnShape: string => string
};

export type Job = {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  company: {
    id: string,
    name: string,
    logo: string,
    description: string,
    location: string,
    industry: string
  }
};
