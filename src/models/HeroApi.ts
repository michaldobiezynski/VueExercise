import axios from "axios"
import { IHero } from './IHero';



export abstract class HerosApi {
    private static herosAxios = axios.create();

    static async getHeroByName(name: string): Promise<IHero> {
        const url = `https://www.superheroapi.com/api.php/215408507339111/search/${name}`
        const response = await this.herosAxios.get<IHero>(url);
        return response.data;
    }
    static async getHeroById(id: string): Promise<IHero> {
        const url = `https://www.superheroapi.com/api.php/215408507339111/search/${id}`
        const response = await this.herosAxios.get<IHero>(url);
        return response.data;
    }
}