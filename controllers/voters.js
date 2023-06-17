import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient

// Prisma create function

const createVoter = async (req, res, next) => {
    const data = req.body
    try {
        const voter = await prisma.voters.create({
            data: data
        })
        res.status(201).json({ message: 'voter saved', voter })
    } catch (error) {
        console.log(error);
    }
}

const getVoterById = async (req, res, next) => {
    const studentId = req.params.studentId
    try {
        const voter = await prisma.voters.findUnique({
            where: {
                studentId
            }
        })
        res.status(200).json({ voter })
    } catch (error) {

    }
}

const getAllVoters = async (req, res, next) => {
    try {
        const voter = await prisma.voters.findMany()
        res.status(200).json({ voter })
    } catch (error) {
        console.log(error);
    }
}

const updateVoter = async (req, res, next) => {
    const studentId = req.params.studentId
    const data = req.body
    try {
        const voter = await prisma.voter.update({
            where: {
                studentId
            },
            data: data
        })
        res.status(201).json({ message: 'voter updated', voter })
    } catch (error) {
        console.log(error);
    }
}

const deletevoter = async (req, res, next) => {
    const studentId = req.params.studentId
    try {
        const voter = await prisma.voter.delete({
            where: {
                studentId
            }
        })
        res.status(201).json({ message: 'voter deleted' })
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    createVoter,
    getVoterById,
    getAllVoters,
    updateVoter,
    deletevoter
}