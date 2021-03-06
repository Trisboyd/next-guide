// the square brackets indicate that this is a dynamic route
import { Character } from "../../types";
import Image from 'next/image';
import imageLoader from "../../imageLoader";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { ReactElement } from "react";
import styles from '../../styles/Character.module.css';

CharacterPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
    const character = await res.json();

    return {
        props: { character }
    }
}

function CharacterPage({ character }: { character: Character }) {
    const router = useRouter();

    // console.log(router.query);

    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <h1>{character.name}</h1>
                <p className={styles.about}>Species: {character.species}</p>
                <p className={styles.about}>Status: {character.status}</p>
            </article>
            <Image
                loader={imageLoader}
                unoptimized
                src={character.image}
                alt={character.name}
                width='200'
                height='200' />
        </div>
    )
}


export default CharacterPage;