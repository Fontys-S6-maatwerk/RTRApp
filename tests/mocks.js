export const solutions = Array.from({ length: 5 }, (_, i) => {
    return {
        id: i,
        name: "Solution name",
        introduction: "This solution had a lot of impact on many people",
        numberOfLikes: 10,
        weatherExtremeType: "Dust storm",
        solutionType: 'how-to video',
        difficulty: 'Medium',
        impactGoal: 100000,
        SDGType: "Goal 13: Climate Action",
        author: i,
        currentImpact: 10000,
        uploadDate: +new Date(),
        viewCount: 0,
        coverImage: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        materials: [],
        tools: [],
        steps: Array.from({ length: 3 }, (_, i) => {
            return {
                description: "step " + i,
                coverImage: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
            }
        })
    }
});

export const $t = () => {}

export const $d = () => {}