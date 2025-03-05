-- Insertions pour la table categories
INSERT INTO categories (id, nom, description, couleur) VALUES 
(1, 'Musique', 'Événements musicaux et concerts', '#FF5733'),
(2, 'Sport', 'Compétitions et événements sportifs', '#33FF57'),
(3, 'Conférence', 'Conférences professionnelles et académiques', '#3357FF'),
(4, 'Art', 'Expositions et événements artistiques', '#FF33F6');

-- Réinitialiser la séquence pour categories
SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));

-- Insertions pour la table lieux
INSERT INTO lieux (id, nom, adresse, ville, "codePostal", pays, capacite, "coordonneesGPS") VALUES 
(1, 'Palais des Sports', '123 Avenue des Sports', 'Paris', '75001', 'France', 5000, '48.8566,2.3522'),
(2, 'Zénith', '15 Rue de la Musique', 'Lyon', '69001', 'France', 3000, '45.7640,4.8357'),
(3, 'Parc des Expositions', '45 Route de la Foire', 'Bordeaux', '33000', 'France', 10000, '44.8378,-0.5792'),
(4, 'Centre de Congrès', '22 Place de la Conférence', 'Toulouse', '31000', 'France', 2000, '43.6047,1.4442');

-- Réinitialiser la séquence pour lieux
SELECT setval('lieux_id_seq', (SELECT MAX(id) FROM lieux));

-- Insertions pour la table utilisateurs
INSERT INTO utilisateurs (id, nom, prenom, email, "motDePasse", telephone, role) VALUES 
(1, 'Dupont', 'Jean', 'jean.dupont@email.com', 'motdepasse123', '+33612345678', 'ORGANISATEUR'),
(2, 'Martin', 'Sophie', 'sophie.martin@email.com', 'password456', '+33687654321', 'CLIENT'),
(3, 'Leroy', 'Pierre', 'pierre.leroy@email.com', 'admin789', '+33654321987', 'ADMIN'),
(4, 'Dubois', 'Marie', 'marie.dubois@email.com', 'organiser123', '+33623456789', 'ORGANISATEUR');

-- Réinitialiser la séquence pour utilisateurs
SELECT setval('utilisateurs_id_seq', (SELECT MAX(id) FROM utilisateurs));

-- Insertions pour la table evenements
INSERT INTO evenements (id, nom, description, "dateDebut", "dateFin", publie, "capaciteMax", "imageUrl", "organisateurId", "lieuId", "categorieId") VALUES 
(1, 'Concert de Rock', 'Grand concert rock avec groupes internationaux', '2024-07-15 20:00:00', '2024-07-16 01:00:00', true, 3000, 'https://example.com/concert.jpg', 1, 2, 1),
(2, 'Conférence Tech', 'Conférence internationale sur les technologies émergentes', '2024-09-10 09:00:00', '2024-09-12 17:00:00', true, 2000, 'https://example.com/conference.jpg', 4, 4, 3),
(3, 'Match de Football', 'Finale du championnat national', '2024-08-20 18:00:00', '2024-08-20 21:00:00', true, 5000, 'https://example.com/football.jpg', 1, 1, 2),
(4, 'Exposition d''Art Moderne', 'Exposition des artistes contemporains', '2024-10-05 10:00:00', '2024-10-15 19:00:00', false, 1500, 'https://example.com/art.jpg', 4, 3, 4);

-- Réinitialiser la séquence pour evenements
SELECT setval('evenements_id_seq', (SELECT MAX(id) FROM evenements));

-- Insertions pour la table tickets
INSERT INTO tickets (id, type, prix, "quantiteDisponible", "debutVente", "finVente", transferable, "evenementId") VALUES 
(1, 'Général', 50.00, 1000, '2024-05-01 00:00:00', '2024-07-14 23:59:59', true, 1),
(2, 'VIP', 150.00, 100, '2024-05-01 00:00:00', '2024-07-14 23:59:59', false, 1),
(3, 'Standard', 100.00, 500, '2024-06-15 00:00:00', '2024-09-09 23:59:59', true, 2),
(4, 'Premium', 250.00, 50, '2024-06-15 00:00:00', '2024-09-09 23:59:59', false, 2),
(5, 'Tribunes', 80.00, 3000, '2024-06-01 00:00:00', '2024-08-19 23:59:59', true, 3),
(6, 'Loges', 300.00, 100, '2024-06-01 00:00:00', '2024-08-19 23:59:59', false, 3);

-- Réinitialiser la séquence pour tickets
SELECT setval('tickets_id_seq', (SELECT MAX(id) FROM tickets));

-- Insertions pour la table commandes
INSERT INTO commandes (id, "montantTotal", statut, reference, "utilisateurId") VALUES 
(1, 200.00, 'CONFIRMEE', 'CMD-20240615-001', 2),
(2, 450.00, 'EN_ATTENTE', 'CMD-20240615-002', 2),
(3, 300.00, 'CONFIRMEE', 'CMD-20240615-003', 1);

-- Réinitialiser la séquence pour commandes
SELECT setval('commandes_id_seq', (SELECT MAX(id) FROM commandes));

-- Insertions pour la table lignes_commande
INSERT INTO "lignes_commande" (id, quantite, "prixUnitaire", "commandeId", "ticketId") VALUES 
(1, 2, 50.00, 1, 1),
(2, 1, 150.00, 1, 2),
(3, 3, 100.00, 2, 3),
(4, 1, 250.00, 2, 4),
(5, 2, 80.00, 3, 5);

-- Réinitialiser la séquence pour lignes_commande
SELECT setval('lignes_commande_id_seq', (SELECT MAX(id) FROM "lignes_commande"));

-- Insertions pour la table paiements
INSERT INTO paiements (id, montant, "methodePaiement", statut, "referenceTransaction", "commandeId") VALUES 
(1, 200.00, 'CARTE_CREDIT', 'COMPLETE', 'TRANS-20240615-001', 1),
(2, 450.00, 'PAYPAL', 'EN_ATTENTE', 'TRANS-20240615-002', 2),
(3, 300.00, 'VIREMENT', 'COMPLETE', 'TRANS-20240615-003', 3);

-- Réinitialiser la séquence pour paiements
SELECT setval('paiements_id_seq', (SELECT MAX(id) FROM paiements));