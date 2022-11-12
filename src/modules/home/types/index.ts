export type Point = {

    id:	string;
    dataCadastro: string;
    userId: string;
    userName: string;
    active: boolean;    
}

export type PointsApiResponse = Point[]