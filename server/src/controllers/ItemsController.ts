import { Request, Response} from 'express'
import knex from '../database/connection';

class ItemsController {

    async index(request: Request, response: Response) {

        const items = await knex('items').select('*');
        
        const serializedItems = items.map(item => {
            return {
                id_item: item.id_item,
                titulo: item.titulo, 
                image_url: `http://192.168.0.17:3333/uploads/${item.image}`
             }
        });
    
        return response.json(serializedItems);
    }

}

export default ItemsController;