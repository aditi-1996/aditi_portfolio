import {
    FaPython
} from 'react-icons/fa';

import {
    SiCplusplus,
    SiCodio,
    SiMysql,
    SiR,
    SiVisualstudiocode,
    SiSqlite,
    SiMongodb,
    SiTensorflow,
    SiKeras,
    SiPytorch,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiScipy,
    SiOpencv,
    SiPlotly,
    SiApachespark,
    SiPytest,
    SiLinux,
    SiGit,
    SiDocker,
    SiAmazonaws,
    SiJupyter,
    SiRstudio,
    SiTableau,
} from 'react-icons/si';

import {
    DiJavascript1
} from 'react-icons/di';

export const skillsData = (size) => {
    const skills = {
        "python": <FaPython className='w-20 mx-auto'
            aria-label='python'
            size={size}
            color="black" />,
        "C": <SiCodio className='w-20 mx-auto'
            aria-label='C'
            size={size}
            color="black" />,
        "C++": <SiCplusplus className='w-20 mx-auto'
            aria-label='C++'
            size={size}
            color="black" />,
        "js": <DiJavascript1 className='w-20 mx-auto'
            aria-label='js'
            size={size}
            color="black" />,
        "r": <SiR className='w-20 mx-auto'
            aria-label='r'
            size={size}
            color="black" />,
        "mysql": <SiMysql className='w-20 mx-auto'
            aria-label='mysql'
            size={size}
            color="black" />,
        "sqlite": <SiSqlite className='w-20 mx-auto'
            aria-label='sqlite'
            size={size}
            color="black" />,
        "mongodb": <SiMongodb className='w-20 mx-auto'
            aria-label='mongodb'
            size={size}
            color="black" />,
        "tensorflow": <SiTensorflow className='w-20 mx-auto'
            aria-label='tensorflow'
            size={size}
            color="black" />,
        "keras": <SiKeras className='w-20 mx-auto'
            aria-label='keras'
            size={size}
            color="black" />,
        "pytorch": <SiPytorch className='w-20 mx-auto'
            aria-label='pytorch'
            size={size}
            color="black" />,
        "pandas": <SiPandas className='w-20 mx-auto'
            aria-label='pandas'
            size={size}
            color="black" />,
        "numpy": <SiNumpy className='w-20 mx-auto'
            aria-label='numpy'
            size={size}
            color="black" />,
        "scikit-learn": <SiScikitlearn className='w-20 mx-auto'
            aria-label='scikitlearn'
            size={size}
            color="black" />,
        "scipy": <SiScipy className='w-20 mx-auto'
            aria-label='scipy'
            size={size}
            color="black" />,
        "opencv": <SiOpencv className='w-20 mx-auto'
            aria-label='opencv'
            size={size}
            color="black" />,
        "plotly": <SiPlotly className='w-20 mx-auto'
            aria-label='plotly'
            size={size}
            color="black" />,
        "apachespark": <SiApachespark className='w-20 mx-auto'
            aria-label='apachespark'
            size={size}
            color="black" />,
        "pytest": <SiPytest className='w-20 mx-auto'
            aria-label='pytest'
            size={size}
            color="black" />,

        "linux": <SiLinux className='w-20 mx-auto'
            aria-label='linux'
            size={size}
            color="black" />,
        "git": <SiGit className='w-20 mx-auto'
            aria-label='git'
            size={size}
            color="black" />,
        "docker": <SiDocker className='w-20 mx-auto'
            aria-label='docker'
            size={size}
            color="black" />,
        "aws": <SiAmazonaws className='w-20 mx-auto'
            aria-label='aws'
            size={size}
            color="black" />,
        "jupyter": <SiJupyter className='w-20 mx-auto'
            aria-label='jupyter'
            size={size}
            color="black" />,
        "vscode": <SiVisualstudiocode className='w-20 mx-auto'
            aria-label='vscode'
            size={size}
            color="black" />,
        "rstudio": <SiRstudio className='w-20 mx-auto'
            aria-label='rstudio'
            size={size}
            color="black" />,
        "tableau": <SiTableau className='w-20 mx-auto'
            aria-label='Tableau'
            size={size}
            color="black" />,
    };

    return skills;
}