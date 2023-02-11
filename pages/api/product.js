import datas from '../../datas.json'
export default function handler(req, res) {
    
    if(req.method !=="get") res.status(405)

    res.status(200).json(datas)

}   
  