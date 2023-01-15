import Layout from '../components/layout/layout'
import { projectData } from '../components/project/project-data'
import ProjectList from '../components/project/project-list'

export default function Projects() {
  return (
    <>
      <Layout pageTitle='Portfolio - Projects'>
        <ProjectList projects={projectData}></ProjectList>
      </Layout>
    </>
  )
};
