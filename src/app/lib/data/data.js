import blogItems from './data-blog.json';
import DataRu from '@/app/lib/data/data-ru.json';



export default class DATA {

    ru(q){

        switch (q) {
            case 'blog':
            return blogItems.blog;
            break;
            case 'main':
            return DataRu;
            break;
            default:
            break;
        }
    
    }

    xy(q){

        switch (q) {
            case 'center':
            return 'contentBox center';
            break;
    
            case 'right':
            return 'contentBox right';    
            break;
    
            case 'left':
            return 'contentBox left';  
            break;
    
            case 'reverse':
            return 'contentBox reverse';     
            break;
        
            default:
            return 'contentBox default';
            break;
        }
    
        
    }




}
