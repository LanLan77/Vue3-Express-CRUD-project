import axiosUtil from '../utils/axiosUtil.js'

class TutorialDataApi{
    create(data){
        console.log(data)
        return axiosUtil.post('/tutorials',data)
    }
    getAll() {
        return axiosUtil.get('/tutorials')
    }

}
export default new TutorialDataApi();
