import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract user data from request body
    const { nom, prenom, email, telephone, role } = body;

    // Validate required fields
    if (!nom || !prenom || !email) {
      return NextResponse.json(
        { error: 'Les champs nom, prénom et email sont obligatoires' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.utilisateur.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Un utilisateur avec cet email existe déjà' },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = await prisma.utilisateur.create({
      data: {
        nom,
        prenom,
        email,
        telephone,
        role: role || 'CLIENT', // Default role is CLIENT if not specified
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'utilisateur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}