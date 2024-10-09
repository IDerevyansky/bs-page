import blogItems from './data-blog.json';
import DATA from '@/app/lib/data/data-ru.json';

export default function data(q){

    switch (q) {
        case 'blog':
        return blogItems.blog;
        break;
        case 'ru':
        return DATA;
        break;
        default:
        break;
    }

    
}