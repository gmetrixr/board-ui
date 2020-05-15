export interface IPin {
  id: string,
  title: string,
  body: string
}

export interface IBoard {
  id: string,
  pins: {
    [key: string]: IPin
  }
}

export interface ChatMessage {
  id: string,
  content: string,
  timestamp: number,
  userID: number,
  username: string
}

export interface CurrentUser {
  userID: number, username: string
}