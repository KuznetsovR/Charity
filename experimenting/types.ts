interface Point {
    readonly x: number
    readonly y: number
}

class Point {
    constructor(readonly x = 0, readonly y = 0) { }
}
interface HashMap<Key, Value>{
    get(key: Key): Value
    set(key: Key, value: Value)
}
interface HashSet<T> extends HashMap<T, T>{

}

class ApiService{
    defaultMapper<Response>(res: Response): Response{
        return res
    }

    request<Response>(method: string, url:string, options: object): Promise<Response>;

    request<Response, Mapped = Response>(method: string, url:string, mapper: (res: Response)=> Mapped, options: object): Promise<Mapped>;

    request<Response, Mapped = Response>(method: string, url:string, mapper: object | ((res: Response)=> Mapped), options?: object): Promise<Mapped>{
        if (typeof mapper !== 'function') {
            options = mapper
            mapper = this.defaultMapper as any
        } else {
            mapper
        }
        return Promise.resolve(null)
    }
}
const service = new ApiService()
service.request('', '', {})
service.request('', '', () => ({}), {})
const point = new Point(5, 10)
const arr: [string, string, string] = ['ss', 'dd', 'ff']

point.x
type Mapped = Record<string, boolean>
const mapped: Mapped = {
    asd: true,
    dsa: true,
    14: false
}
type a = keyof Point;
const f: a = 'y'