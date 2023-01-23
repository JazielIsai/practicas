

export const User = ( { nameUser, commentUser } ) => {

    return (
        <div className={'d-flex flex-column  '} >
            <h1 className={'fs-3'} > { nameUser } </h1>


            <div className={'d-flex w-25'}>
                { commentUser }
            </div>
        </div>
    )
}