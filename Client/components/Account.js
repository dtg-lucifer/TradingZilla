import React from 'react'
import { useSession } from 'next-auth/react'


function Account(props) {
    const { data: session } = useSession();
    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            <div className="min-h-[18vh] bg-gray-300">
            </div>
            <div className='flex'>
                <div className="bg-red-500 flex flex-col items-center justify-center -translate-y-10 ml-10 w-32 h-32 rounded-full border-4 border-gray-100">
                    Image
                </div>
                {session && (<h1 className='font-bold m-2 text-lg'>{session.user.username}</h1>)}
            </div>
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const session = await getSession(context);
//     console.log(session);
//     return ({ props: { session } })
// }

export default Account