import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'


createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'qualquer coisa',
          type: 'deposit',
          category: 'any',
          amount: 2992,
          createAt: new Date('2022-02-20 09:22:22')
        },

        {
          id:2,
          title: 'outra coisa',
          type: 'withdraw',
          category: 'any',
          amount: 299,
          createAt: new Date('2022-02-25 03:22:22')
        }
      ]
    })
  },


  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    } )
      

      
    
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


