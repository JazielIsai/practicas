import { User } from "./components/User";
import {Star} from "./components/Star";


const data = [
    {
        id: 1,
        name: 'John',
        comment: 'Hello'
    },
    {
        id: 2,
        name: 'Mary',
        comment: 'Hello'
    },
    {
        id: 3,
        name: 'Peter',
        comment: 'Hello'
    }
]


export const Index = () => {

        return (
            <div className={'container mt-3'}>

                <div className={'row'}>

                    {
                        data.map( ( item ) => {

                            let name = item.name.replace(/J/g, 'j');

                            return (
                                <div key={ item.id } className={'d-flex flex-row bg-gradient gap-4 '}>
                                    <User
                                        nameUser={name}
                                        commentUser={item.comment}
                                    />
                                    <Star />
                                </div>
                            )
                        } )
                    }

                </div>

            </div>
        )
}