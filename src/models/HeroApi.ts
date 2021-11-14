import axios from 'axios';
import { IHero } from './IHero';

interface IHeroApiData {
  'response': string;
  'results-for': string;
  'results': IHero[];
}

export default abstract class HerosApi {
  private static herosAxios = axios.create();

  static async getHeroByName(name: string): Promise<any> {
    const url = `https://www.superheroapi.com/api.php/215408507339111/search/${name}`;
    const { data } = await (await this.herosAxios.get<any>(url));
    return data;
  }

  static async getHeroById(id: string): Promise<any> {
    const url = `https://www.superheroapi.com/api.php/215408507339111/${id}`;
    const { data } = await (await this.herosAxios.get<any>(url));
    return data;
  }
}
