import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import useScoresById from '../../lib/useScoresById'
import { useRouter } from 'next/router'
import NotFoundPage from './404'

const Golfer = () => {
    const router = useRouter()
    const { id } = router.query

    console.log(process.env.NEXT_PUBLIC_API_URL + "/golfers/" +id)

    const { scores, error } = useScoresById(id) || {} 

    console.log(scores)

  return (
    <Layout>
      <>
        {error ? (
          <NotFoundPage />
        ) : (
          <>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}


export default Golfer
