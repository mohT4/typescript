import mongoose, { Connection } from 'mongoose';
import EventEmitter from 'events';

const options = {
  uri: process.env.DATABASE!,
  name: process.env.MONGO_DB_NAME || process.env.DATABASE!.split('/')[3],
};

class connection extends EventEmitter {
  private _options: { uri?: string; name?: string };
  private _connection: Connection;

  constructor(options: { uri: string; name: string }) {
    super();
    (this._options = options), (this._connection = mongoose.createConnection());
    this._listen();
    this._connect();
  }

  get connection(): Connection {
    return this._connection;
  }

  private _listen() {
    this._connection.on('connected', () =>
      console.log(`Connected to ${this._options.name} database`)
    );

    this._connection.on('error', (error) =>
      console.log(
        `Connect to ${this._options.name} database failed. ${error.message}`
      )
    );

    this._connection.on('disconnected', () =>
      console.log(`Connect to ${this._options.name} database disconnected`)
    );

    this._connection.on('disconnecting', (error) =>
      console.log(
        `Connect to ${this._options.name} database is disconnecting. ${error.message}`
      )
    );
  }

  private _connect() {
    const { uri } = this._options;
    if (!uri) throw new Error('DataBase URI is missing');
    this._connection.openUri(uri);
  }
}

export const database: Connection = new connection(options).connection;
