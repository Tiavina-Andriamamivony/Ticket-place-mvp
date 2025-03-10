import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/db';
import { hash } from 'bcrypt';



// GET /api/users - Récupérer tous les utilisateurs
export async function GET() {
    try {
        const users = await prisma.utilisateur.findMany();

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des utilisateurs' },
            { status: 500 }
        );
    }
}

